import React from 'react';
import {
  Grid, Typography, Box, Select, MenuItem, TextField, Button, Tooltip,
  Card
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'





const New_Center = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ py: 2 }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1" color="initial"></Typography>
          <Typography variant="h5" color="initial" align="center">
            New Center
          </Typography>
          <Tooltip title="Save">
            <Button><FontAwesomeIcon icon={faFloppyDisk} style={{ fontSize: '1.4rem' }} /></Button>
          </Tooltip>
        </Grid>
        <Grid item xs={12} md={6} className="dataView">
          <label htmlFor="centerName">Center Name:</label>
          <TextField id="centerName" sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} className="dataView">
          <label htmlFor="centerID">Center ID:</label>
          <TextField id="centerID" sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} className="dataView">
          <label htmlFor="region">Region:</label>
          <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <Select id="RegionName" fullWidth>
              <MenuItem value="">Select Region Name</MenuItem>
              <MenuItem value="Region1">Region 1</MenuItem>
              <MenuItem value="Region2">Region 2</MenuItem>
              <MenuItem value="Region3">Region 3</MenuItem>
              <MenuItem value="Region4">Region 4</MenuItem>
            </Select>
            <Link to='/new_region'>
              <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faPlus} /></span>
            </Link>
            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faEdit} /></span>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="dataView">
          <label htmlFor="DivisionName">Division:</label>
          <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <Select id="DivisionName" fullWidth>
              <MenuItem value="">Select Division Name</MenuItem>
              <MenuItem value="Division1">Division 1</MenuItem>
              <MenuItem value="Division2">Division 2</MenuItem>
            </Select>
            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faPlus} /></span>
            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faEdit} /></span>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="dataView">
          <label htmlFor="district">District:</label>
          <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <Select id="DistrictName" fullWidth>
              <MenuItem value="">Select District Name</MenuItem>
              <MenuItem value="District1">District 1</MenuItem>
              <MenuItem value="District2">District 2</MenuItem>
            </Select>
            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faPlus} /></span>
            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faEdit} /></span>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="dataView">
          <label htmlFor="tehsil">Tehsil:</label>
          <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
            <Select id="TehsilName" fullWidth>
              <MenuItem value="">Select Tehsil Name</MenuItem>
              <MenuItem value="Tehsil1">Tehsil 1</MenuItem>
              <MenuItem value="Tehsil2">Tehsil 2</MenuItem>
            </Select>
            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faPlus} /></span>
            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faEdit} /></span>
          </Box>
        </Grid>

      </Grid>
    </Card>
  );
};

export default New_Center;
