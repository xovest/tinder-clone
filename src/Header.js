import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material'
import IconButton from '@mui/material'
import Forum from '@mui/icons-material'

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className='header__logo' src='tinder-logo' alt='tinder-alt' />

      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  )
}

export default Header