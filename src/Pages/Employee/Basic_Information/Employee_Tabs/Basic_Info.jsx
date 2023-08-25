import React, { useState } from 'react'
import { Grid, Box, Typography, TextField, Tooltip, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faFloppyDisk } from '../../../../Assets/Icons/Icons.js';
import { rows } from '../../../../Data/Dummy_Data/Dummy__Data.js'
import avartar from '../../../../Assets/png/avatar.jpg';
import '../../../Styles.css'

const Basic_Info = (props) => {
  const [edit, setEdit] = useState(false);
  const rowData = props.Id ? rows.find(row => row.id === props.Id) : null;

  const handleEdit = () => {
    setEdit(!edit);
  };

  if (props.Id && !rowData) {
    return <Typography>No data found for the provided ID.</Typography>;
  }
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={12} mb={-6} mt={2} sx={{ display: "flex", justifyContent: "flex-end" }} >
          {
            edit ?
              <Tooltip title="Save">
                <Button sx={{ mt: -3 }}>
                  <FontAwesomeIcon icon={faFloppyDisk} />
                </Button>
              </Tooltip>
              :
              <Tooltip title="Edit">
                <Button sx={{ mt: -3 }} onClick={handleEdit}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
              </Tooltip>
          }
        </Grid>

        <Grid item xs={12} md={3}>
          <Box className="Basic_Profile_Img" sx={{ mb: 4, objectFit: 'contain', overflow: 'hidden' }}>
            <img src={avartar} alt="" width={200} />
          </Box>
          <Box className="dataView">
            <label name="name" style={{ width: "40%" }}>Service Duration:</label>
            <Typography variant="body2" color="initial" >{rowData.service_duration}</Typography>
          </Box>
          <Box className="dataView">
            <label name="name" style={{ width: "40%" }}>CNIC:</label>
            <Typography variant="body2" color="initial" >{rowData.cnic}</Typography>
          </Box>
          <Box className="dataView">
            <label name="name" style={{ width: "40%" }}>Job:</label>
            <Typography variant="body2" color="initial" >{rowData.position.job.job_title}</Typography>
          </Box>
        </Grid>


        <Grid item xs={12} md={4} >
          <Box className="dataView">
            <label name="name">Employee No :</label>
            <TextField id="" label="" defaultValue={rowData.employee_no} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Title :</label>
            <TextField id="" label="" defaultValue={rowData.title.employee_title} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Name :</label>
            <TextField id="" label="" defaultValue={rowData.first_name} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Father Name:</label>
            <TextField id="" label="" defaultValue={rowData.father_name} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">CNIC:</label>
            <TextField id="" label="" defaultValue={rowData.cnic} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Phone Number:</label>
            <TextField id="" label="" defaultValue={rowData.phoneNumber} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Passport Number:</label>
            <TextField id="" label="" defaultValue={rowData.passport_number} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Joining Date:</label>
            <TextField id="" label="" defaultValue={rowData.date_of_joining} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Reporting Officer:</label>
            <TextField id="" label="" defaultValue={rowData.reporting_officer} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Assigning Officer:</label>
            <TextField id="" label="" defaultValue={rowData.counter_assigning_officer} disabled={!edit} />
          </Box>
        </Grid>


        <Grid item xs={12} md={4}>
          <Box className="dataView">
            <label name="name">Center Name:</label>
            <TextField id="" label="" defaultValue={rowData.center.center_name} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">District:</label>
            <TextField id="" label="" defaultValue={rowData.domicile_district} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Tehsil:</label>
            <TextField id="" label="" defaultValue={rowData.center.tehsil} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Job :</label>
            <TextField id="" label="" defaultValue={rowData.position.job.job_title} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Job Level:</label>
            <TextField id="" label="" defaultValue={rowData.position.job_level.job} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Position:</label>
            <TextField id="" label="" defaultValue={rowData.position.position_id} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Position Type:</label>
            <TextField id="" label="" defaultValue={rowData.position.position_type.position_type_name} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">PPG Level:</label>
            <TextField id="" label="" defaultValue={rowData.position.job.ppg_level} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Wing:</label>
            <TextField id="" label="" defaultValue={rowData.position.wing.wing_name} disabled={!edit} />
          </Box>
          <Box className="dataView">
            <label name="name">Sub Wing:</label>
            <TextField id="" label="" defaultValue={rowData.position.sub_wing.sub_wing_name} disabled={!edit} />
          </Box>
        </Grid>
      </Grid>
    </div >
  )
}

export default Basic_Info