/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "./ReactPortal";
import "./modal.css";

function Modal({ children, isOpen, handleClose }) {
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            <img
              type="button"
              src="./close.png"
              onClick={handleClose}
              className="close-btn"
            />
            {children}
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
export default Modal;
