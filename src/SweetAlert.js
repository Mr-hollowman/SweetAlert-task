import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";

function SweetAlertDemo() {
  const Confirm = () => alert("You clicked confirm Button");
  const Cancel = () => alert("You clicked cancel button");
  return (
    <SweetAlert
      warning
      showCancel
      confirmBtnText="Yes, delete it!"
      confirmBtnBsStyle="danger"
      title="Are you sure?"
      onConfirm={Confirm}
      onCancel={Cancel}
    >
      You will not be able to recover this!
    </SweetAlert>
  );
}
export default SweetAlertDemo;
