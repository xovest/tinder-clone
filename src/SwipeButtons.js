import React from 'react'
import './SwipeButtons.css';
import { ReplayIcon, CloseIcon, StarRateIcon, FavoriteIcon, FlashOnIcon } from '@mui/icons-material'
import IconButton from '@mui/material'

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='each__classnameLOL'>
        <ReplayIcon />
      </IconButton>
      <IconButton className='each__classnameLOL'>
        <CloseIcon />
      </IconButton>
      <IconButton className='each__classnameLOL'>
        <StarRateIcon />
      </IconButton>
      <IconButton className='each__classnameLOL'>
        <FavoriteIcon />
      </IconButton>
      <IconButton className='each__classnameLOL'>
        <FlashOnIcon />
      </IconButton>
    </div>
  )
}

export default SwipeButtons