import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { DEFAULT_ICON_SIZE } from '../../utils/constans'

import './dropdownList.scss'

const DropdownList = ({ children }) => {
  const [isDropDownListShow, setIsDropDownListShow] = useState(false)

  const showDropdownList = () => {
    setIsDropDownListShow(!isDropDownListShow)
  }

  return (
    <div>
      <button onClick={showDropdownList} className="dropdown-menu-button">
        <img
          className="dropdown-menu-list"
          src="/images/dropdownList.svg"
          width={DEFAULT_ICON_SIZE}
          height={DEFAULT_ICON_SIZE}
        />
        <div className={`dropdown ${isDropDownListShow && 'is-dropdownShow'}`}>
          <ul className="drop-down-list"> {children} </ul>
        </div>
      </button>
    </div>
  )
}

DropdownList.propTypes = {
  children: PropTypes.node,
}

export default DropdownList
