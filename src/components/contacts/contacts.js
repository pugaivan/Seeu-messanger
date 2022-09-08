import React, { useState, useEffect } from 'react'
import Input from '../input/input'
import Modal from '../modal/modal'
import { validate } from '../../utils/validation'
import { FORM_FIELDS } from '../../utils/constans'
import { getNewContact } from '../../service/api'
import { isObjectEmpty } from '../../utils/helper'
import ListItem from '../listItem/listItem'
import { getContacts } from '../../service/api'
import { deleteContact } from '../../service/api'

const { PHONE } = FORM_FIELDS

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [isModalActive, setModalIsActive] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [errors, setErrros] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const onPhoneChange = (event) => setPhoneNumber(event.target.value)

  useEffect(() => {
    fetchСontacts()
  }, [])

  async function fetchСontacts() {
    const response = await getContacts()
    if (response.isSuccessful) {
      setContacts(response.res.data.users)
    }
  }

  const deleteContactUser = async (id) => {
    await deleteContact({ contactId: id })
    fetchСontacts()
  }

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

    if (isObjectEmpty(validationErrors)) {
      const response = await getNewContact({ phoneNumber })

      if (response.isSuccessful) {
        fetchСontacts()
        setModalIsActive(false)
      } else {
        setErrorMessage(response.data.errorMessage)
      }
    }
  }

  return (
    <>
      <div className="contacts-container">
        <div>
          <button onClick={() => setModalIsActive(true)}>Add new contact</button>
        </div>
        <ul className="contact-list">
          {contacts.map((item, index) => (
            <li key={index}>
              <ListItem item={item} onDeleteContact={deleteContactUser} />
            </li>
          ))}
        </ul>
      </div>
      <Modal
        isActive={isModalActive}
        setIsActive={setModalIsActive}
        submit={modalSubmit}
        textError={errorMessage}
      >
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
