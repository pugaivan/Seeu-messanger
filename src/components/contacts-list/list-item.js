import React from 'react'

import PropTypes from 'prop-types'

import './list-item.scss'

const ListItem = ({ item }) => {
  const { first_name, last_name } = item

  return (
    <div>
      <div className="user-info">
        <span>{first_name}</span>
        <span>{last_name}</span>
      </div>
      <span className="contacts-message">message</span>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.object,
}

export default ListItem
