import React, { useState } from 'react'
import "../../Styles.css"
import {
  Card, CardContent, MenuItem, Menu, TextField,
  Typography, Box, Button, Grid, InputLabel, Select
} from "@mui/material";
import Breadcrumb from '../../../Components/Common/BreadCrumb.jsx';
import { MyTableContainer } from '../../../Components/index.js';
import '../../Styles.css'
import { rows } from '../../../Data/Dummy_Data/Dummy__Data.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';

const Personal__Information = () => {
  const [uploadedFrontImage, setUploadedFrontImage] = useState(null);
  const [uploadedBackImage, setUploadedBackImage] = useState(null);
  const [uploadedProfileImage, setUploadedProfileImage] = useState(null);

  const handleFileChange = (event, imageType) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target.result;

      if (imageType === 'frontImage') {
        setUploadedFrontImage(imageUrl);
      } else if (imageType === 'backImage') {
        setUploadedBackImage(imageUrl);
      } else if (imageType === 'profileImage') {
        setUploadedProfileImage(imageUrl);
      }
    };

    reader.readAsDataURL(file);
  };
  const titleOptions = [
    "",
    "Private Limited",
    "Limited",
    "LLP",
    "Proprietorship",
    "Individual",
    "Trust",
    "HUF",
    "Other",
  ];
  const groupsOptions = [
    "",
    "MR",
    "Ms",
  ];


  const theme = useTheme();

  return (
    <>

      <Box component={Card} sx={{ mt: 3, pt: 2 }}>
        <CardContent>
          <form>
            <Grid container spacing={2} >
              <Grid item xs={12} md={4} >
                <InputLabel htmlFor="validationCustom01">CNIC<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="fname">First Name<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField id="fname" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="lname">Last Name<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField id="lname" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="fatherName">Father's Name<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField id="fatherName" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="passportNumber">Passport Number</InputLabel>
                <TextField id="passportNumber" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="domicileDistrict">Domicile District<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField id="domicileDistrict" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="phoneNumber">Phone Number<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField id="phoneNumber" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="J_date">Joining Date<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField type='date' id="J_date" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="groups">Groups<span style={{ color: "red" }}>*</span></InputLabel>
                <Select fullWidth id="groups">
                  {groupsOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="title">Title<span style={{ color: "red" }}>*</span></InputLabel>
                <Select fullWidth id="title">
                  {titleOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="center">Center<span style={{ color: "red" }}>*</span></InputLabel>
                <Select fullWidth id="center">
                  <MenuItem value=""><em>Select an option</em></MenuItem>
                  <MenuItem value="Option 1">Option 1</MenuItem>
                  <MenuItem value="Option 2">Option 2</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="currentPosition">Position<span style={{ color: "red" }}>*</span></InputLabel>
                <Select fullWidth id="currentPosition">
                  <MenuItem value=""><em>Select an option</em></MenuItem>
                  <MenuItem value="Option 1">Option 1</MenuItem>
                  <MenuItem value="Option 2">Option 2</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="profileImage">Profile Image<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField
                  accept="image/*"
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  onChange={(event) => {
                    handleFileChange(event, 'profileImage');
                  }}
                />
                <div className='Image_Upload_Box'>
                  {uploadedProfileImage && <img src={uploadedProfileImage} alt="Profile Uploaded" className='Upload_Image' />}
                  {!uploadedProfileImage && <p className='file_box_css'>No File Chosen</p>}
                </div>
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="frontImage">ID Card Front Image<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField
                  accept="image/*"
                  type="file"
                  id="frontImage"
                  name="frontImage"
                  onChange={(event) => {
                    handleFileChange(event, 'frontImage');
                  }}
                />
                <div className='Image_Upload_Box'>
                  {uploadedFrontImage && <img src={uploadedFrontImage} alt="Front Uploaded" className='Upload_Image' />}
                  {!uploadedFrontImage && <p className='file_box_css'>No File Chosen</p>}
                </div>
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="backImage">ID Card Back Image<span style={{ color: "red" }}>*</span></InputLabel>
                <TextField
                  accept="image/*"
                  type="file"
                  id="backImage"
                  name="backImage"
                  onChange={(event) => {
                    handleFileChange(event, 'backImage');
                  }}
                />
                <div className='Image_Upload_Box'>
                  {uploadedBackImage && <img src={uploadedBackImage} alt="Back Uploaded" className='Upload_Image' />}
                  {!uploadedBackImage && <p className='file_box_css'>No File Chosen</p>}
                </div>
              </Grid>
            </Grid>
          </form>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant='contained'>Add Information</Button>
          </Grid>
        </CardContent>
      </Box>
    </>
  );
};

export default Personal__Information;
