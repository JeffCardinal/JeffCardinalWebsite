import React from 'react'
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal show" : "modal hide";
    return(
      <div className="overlay">
        <div className={showHideClassName}>Hello from Modaland!</div>
      </div>
    )
}
export default Modal;
