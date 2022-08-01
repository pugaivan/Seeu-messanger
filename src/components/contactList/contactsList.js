import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './listItem'
import './contactsList.scss'

const ContactsList = ({ contacts }) => {
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

ContactsList.propTypes = {
  contacts: PropTypes.array,
}

export default ContactsList
