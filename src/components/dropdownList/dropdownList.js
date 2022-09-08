import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types'
import { DEFAULT_ICON_SIZE } from '../../utils/constans'
import useOnClickOutside from '../../hooks/useOnClickOutside'

import './dropdownList.scss'

const DropdownList = ({ children }) => {
  const [isDropDownListShow, setIsDropDownListShow] = useState(false)
  const dropDownRef = useRef()
  useOnClickOutside(dropDownRef, () => setIsDropDownListShow(false))
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
        <div ref={dropDownRef} className={`dropdown ${isDropDownListShow && 'is-dropdownShow'}`}>
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
