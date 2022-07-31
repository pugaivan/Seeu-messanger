import React, { useEffect, useState } from 'react'

import { getContacts } from '../../service/api'
import ListItem from './list-item'
import './contacts-list.scss'

const ContactsList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await getContacts()
      setContacts(data.users)
    }
    fetchData()
  }, [])

  return (
    <ul>
      {contacts.map((item, index) => (
        <li key={index}>
          <ListItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ContactsList
