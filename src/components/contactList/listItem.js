import React from 'react'

import DropdownList from '../dropdownList/dropdownList'
import { DEFAULT_ICON_SIZE } from '../../utils/constans'
import PropTypes from 'prop-types'
import { deleteContact } from '../../service/api'

import './listItem.scss'

const ListItem = ({ item }) => {
  const { first_name, last_name, id } = item

  const deleteContactUser = (event) => {
    event.stopPropagation()
    deleteContact({ contactId: id })
  }

  return (
    <div className="user-container">
      <div className="user-info">
        <span>{first_name}</span>
        <span>{last_name}</span>
        <DropdownList>
          <li>
            <div className="dropdown-menu-trash-button" onClick={(event) => deleteContactUser(event)}>
              {/*need use "button" instead of "div" but i didn't fond solution*/}
              <span>Delete contact</span>
              <img
                className="dropdown-menu-list"
                src="/images/trash.png"
                width={DEFAULT_ICON_SIZE}
                height={DEFAULT_ICON_SIZE}
              />
            </div>
          </li>
        </DropdownList>
      </div>
      <div>
        <span className="contacts-message">message</span>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    id: PropTypes.number,
  }),
}

export default ListItem
