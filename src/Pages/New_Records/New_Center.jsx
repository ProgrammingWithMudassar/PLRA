import React from 'react';
import {
  Grid, Typography, Box, Select, MenuItem, TextField, Button, Tooltip,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const New_Center = () => {
  return (
    <div>
      <Typography variant="h5" color="initial" align="center">
        New Center
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
          <Tooltip title="Save">
            <Button>
              <FontAwesomeIcon icon={faFloppyDisk} style={{ fontSize: '1.4rem' }} />
            </Button>
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="centerName">Center Name:</label>
          <Box sx={{ display: 'flex' }}>
            <Select id="centerName" fullWidth>
              <MenuItem value="">Select Center Name</MenuItem>
              <MenuItem value="center1">Center 1</MenuItem>
              <MenuItem value="center2">Center 2</MenuItem>
              {/* Add more MenuItem elements for options */}
            </Select>
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="district">District:</label>
          <Box sx={{ display: 'flex' }}>
            <TextField id="district" fullWidth />
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="tehsil">Tehsil:</label>
          <Box sx={{ display: 'flex' }}>
            <TextField id="tehsil" fullWidth />
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="region">Region:</label>
          <Box sx={{ display: 'flex' }}>
            <TextField id="region" fullWidth />
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span style={{ marginLeft: '1rem' }}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default New_Center;
