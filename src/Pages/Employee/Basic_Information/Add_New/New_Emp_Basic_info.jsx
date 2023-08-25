import React, { useState } from 'react'
import { Grid, Box, Typography, TextField, Tooltip, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faFloppyDisk } from '../../../../Assets/Icons/Icons.js';
import { rows } from '../../../../Data/Dummy_Data/Dummy__Data.js'
import avartar from '../../../../Assets/png/avatar.jpg';
import '../../../Styles.css'

const New_Emp_Basic_info = (props) => {



  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={12} mb={-6} mt={2} sx={{ display: "flex", justifyContent: "flex-end" }} >
          <Tooltip title="Edit">
            <Button sx={{ mt: -3 }} onClick={handleEdit}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </Tooltip>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box className="Basic_Profile_Img" sx={{ mb: 4, objectFit: 'contain', overflow: 'hidden' }}>
            <img src={avartar} alt="" width={200} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} >
          <Box className="dataView">
            <label name="name">Employee No :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Title :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Name :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Father Name:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">CNIC:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Phone Number:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Passport Number:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Joining Date:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Reporting Officer:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Assigning Officer:</label>
            <TextField id="" label="" />
          </Box>
        </Grid>


        <Grid item xs={12} md={4}>
          <Box className="dataView">
            <label name="name">Center Name:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">District:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Tehsil:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Job :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Job Level:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Position:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Position Type:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">PPG Level:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Wing:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Sub Wing:</label>
            <TextField id="" label="" />
          </Box>
        </Grid>
      </Grid>
    </div >
  )
}

export default New_Emp_Basic_info