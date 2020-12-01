import React from "react";
import ReactDOM from "react-dom";
import "../../index.scss";

const Modal = (props) => {


  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      {props.modalBody}
      
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
