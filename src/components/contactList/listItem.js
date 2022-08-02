import React from 'react'

import PropTypes from 'prop-types'

import './listItem.scss'

const ListItem = ({ item }) => {
  const { first_name, last_name } = item

  return (
    <>
      <div className="user-info">
        <span>{first_name}</span>
        <span>{last_name}</span>
      </div>
      <span className="contacts-message">message</span>
    </>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),
}

export default ListItem
