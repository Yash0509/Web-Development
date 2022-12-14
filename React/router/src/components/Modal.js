import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimer show modals visible active">
            <div className="ui raised very padded text contained segment">
                <h1> I am a Modal</h1>
            </div>
        </div>,
        document.querySelector('#Modal')
    )
}


export default Modal;