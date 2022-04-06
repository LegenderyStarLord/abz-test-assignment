import React from "react";
import "./Modal.scss";

function Modal(props) {
    return (
        <div className={props.active ? "modal active" : "modal"} >
            <div className={props.active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                <h3>Congratulations</h3>
                <p>You have successfully passed the registration</p>
                <button  onClick={() => props.setActive(false)}>Great</button>
            </div>
        </div>
    );
}

export default Modal;