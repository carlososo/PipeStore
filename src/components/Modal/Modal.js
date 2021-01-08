import React from "react";
import ReactDOM from "react-dom";
import "../../styles/index.scss";

const Modal = (props) => {


  return ReactDOM.createPortal(
    <div 
        onClick={props.onDismiss} 
        className=" ui dimmer modals visible active animate__animated animate__fadeIn">
      {props.modalBody}
      
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
