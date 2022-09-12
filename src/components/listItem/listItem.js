import React from 'react'
import PropTypes from 'prop-types'

import DropdownList from '../dropdownList/dropdownList'
import { DEFAULT_ICON_SIZE, PATH } from '../../utils/constans'
const { IMAGES } = PATH

import './listItem.scss'

const ListItem = ({ item, onDeleteContact }) => {
  const { first_name, last_name, id } = item

  const onDeleteClick = () => {
    onDeleteContact(id)
  }

  return (
    <div className="user-container">
      <div className="user-info">
        <span>{first_name}</span>
        <span>{last_name}</span>
        <DropdownList>
          <li className="dropdown-list-item">
            <div className="dropdown-menu-trash-button" onClick={onDeleteClick}>
              {/*need use "button" instead of "div" but i didn't fond solution*/}
              <span>Delete contact</span>
              <img
                className="dropdown-menu-list"
                src={`${IMAGES}trash.png`}
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
  onDeleteContact: PropTypes.func,
}

export default ListItem
