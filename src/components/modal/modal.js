import React from "react";
import './modal.scss';


const Modal = ({ isActive, setIsActive, children, submit }) => {
    return (
        <div className={isActive === true ? "modal active" : "modal"} onClick={() => setIsActive(false)}>
            <div className={isActive === true ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                <button onClick={() => setIsActive(false)}>X</button>
                {children}
                <div className="modal-footer">
                    <button onClick={submit}>Find</button>
                    <button onClick={() => setIsActive(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}


export default Modal