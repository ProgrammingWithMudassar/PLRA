import React, { useState } from 'react'
import "../../../Styles.css"
import {
  Card, CardContent, MenuItem, TextField,
  Box, Button, Grid, InputLabel, Select,
} from "@mui/material";
import Breadcrumb from '../../../../Components/Common/BreadCrumb.jsx';
import { rows } from '../../../../Data/Dummy_Data/Dummy__Data.js'
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare, faFloppyDisk } from '../../../../Assets/Icons/Icons.js';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import '../../../Styles.css'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});




const AddEmployee = () => {
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


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Breadcrumb
        title="Employee"
        breadcrumbItem="Employee / Basic Information"
        buttons={[""]}
        routes={{
          plus: "/employee/personal_information",
        }}
      />
      <Box component={Card} sx={{ mt: 1 }}>
        <CardContent>
          <Box sx={{ textAlign: 'right' }}>
            <Button onClick={handleClickOpen}><FontAwesomeIcon icon={faFloppyDisk} /></Button>
          </Box>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
              style: {
                position: 'absolute', top: '45%', left: '48%', width: "500px",
                transform: 'translate(-50%, -50%)', color: 'black', padding: "10px 0 10px 10px",
              }
            }}
          >
            <DialogTitle>{"Employee Basic Information"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Employe Basic Information Updated Successfully.
              </DialogContentText>
            </DialogContent>
          </Dialog>
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
                <TextField type='date' id="J_date" variant="outlined" fullWidth/>
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
                  className="custom"
                  sx={{ display: 'none' }}
                  onChange={(event) => {
                    handleFileChange(event, 'backImage');
                  }}></TextField>
                <Button className="custom-file-button"
                  onChange={(event) => {
                    handleFileChange(event, 'backImage');
                  }}>
                  Add File
                </Button>
                <div className='Image_Upload_Box'>
                  {uploadedBackImage && <img src={uploadedBackImage} alt="Back Uploaded" className='Upload_Image' />}
                  {!uploadedBackImage && <p className='file_box_css'>No File Chosen</p>}
                </div>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Box>
    </>
  );
};

export default AddEmployee;
