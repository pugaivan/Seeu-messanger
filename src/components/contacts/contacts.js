import React, { useState } from 'react'
import Input from '../input/input'
import Modal from '../modal/modal'
import { validate } from '../../utils/validation'
import { FORM_FIELDS } from '../../utils/constans'

const { PHONE } = FORM_FIELDS

const Contacts = () => {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [errors, setErrros] = useState({})
  const onPhoneChange = (event) => setPhoneNumber(event.target.value)

  const modalSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validate(
      {
        [PHONE]: {
          required: true,
          value: phoneNumber,
        },
      },
      { ...errors },
    )
    setErrros({ ...validationErrors })
  }

  return (
    <>
      <div className="contacts-container">
        <div>
          <button onClick={() => setModalIsActive(true)}>Add new contact</button>
        </div>
        <div>contacts</div>
      </div>
      <Modal isActive={modalIsActive} setIsActive={setModalIsActive} submit={modalSubmit}>
        <Input
          placeholder="Phone"
          id="phone-number"
          label="Phone number"
          type="text"
          onChange={onPhoneChange}
          errors={errors}
          name={PHONE}
        />
      </Modal>
    </>
  )
}

export default Contacts
