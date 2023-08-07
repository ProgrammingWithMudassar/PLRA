import React from 'react'
import { Typography } from '@mui/material'

const Dashboard = () => {
  return (
    <>
      <Typography variant="h6" color="initial">Dashboard</Typography>

      {/* inputs */}
      <input type="text" className='input' />
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>

      

    </>
  )
}

export default Dashboard