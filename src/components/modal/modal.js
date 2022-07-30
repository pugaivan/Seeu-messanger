import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import './modal.scss'

const Modal = ({ isActive, setIsActive, children, submit, textError }) => {
  const modalRef = useRef()
  useOnClickOutside(modalRef, () => setIsActive(false))

  return (
    <div className={`modal ${isActive && '-is-active'}`}>
      <div ref={modalRef} className={`modal-content ${isActive && '-is-active'}`}>
        <button className="close-button" onClick={() => setIsActive(false)}>
          X
        </button>
        {children}
        <div className="modal-footer">
          <h4>{textError}</h4>
          <button className="modal-buttons" onClick={submit}>
            Find
          </button>
          <button className="modal-buttons" onClick={() => setIsActive(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  setIsActive: PropTypes.func,
  children: PropTypes.node,
  submit: PropTypes.func,
  isActive: PropTypes.bool,
  textError: PropTypes.string,
}

export default Modal
