import React, { useState } from 'react'
import "../../Styles.css"
import {
  Card, CardContent, MenuItem, Select, Menu, Typography,
  Grid, TextField, InputLabel, Box, Button,
} from "@mui/material";
import Breadcrumb from '../../../Components/Common/BreadCrumb.jsx';
import { MyTableContainer } from '../../../Components/index.js';
import '../../Styles.css'
import { rows } from '../../../Data/Dummy_Data/Dummy__Data.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const renderNullInRed = (params) => {
  const value = params.value;
  if (value === null) {
    return <span style={{ color: 'red' }}>Null</span>;
  }
  return value;
};


const columns = [
  { field: "employee_no", headerName: "Employee No", type: "string", width: 200, renderCell: renderNullInRed},
  { field: "cnic", headerName: "CNIC", type: "string", width: 200, align:'left',renderCell: renderNullInRed},
  {
    field: "name", headerName: "Name", type: "string", width: 300,renderCell: renderNullInRed,
    valueGetter: (params) => `${params.row.first_name || ""} ${params.row.last_name || ""}`,
  },
  {
    field: "center_name", headerName: "Center Name", type: "string", width: 200,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.center.center_name || "",
  },
  {
    field: "job", headerName: "Job", type: "string", width: 150,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.position.job.job_title || "",
  },
  {
    field: "wingName", headerName: "Wing Name", type: "string", width: 130,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.position.wing.wing_name || "",
  },
  { field: 'Action', headerName: 'Action', type: 'string', width: 100,
  
    renderCell: (params) => {
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => setAnchorEl(null);
      const onEdit = () => handleClose();
      const onDelete = () => handleClose();
      const onView = () => handleClose();
      
      return (
        <div >
          <Button onClick={handleClick} size="small" variant='contained' aria-controls={open ? 'dropdown-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} sx={{ py: 0, px: 2, fontSize: "0.8rem" }}>Action</Button>
          <Menu
            anchorEl={anchorEl}
            id="dropdown-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible', mt: 1.5,
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                '&:before': {
                  content: '""', display: 'block',
                  position: 'absolute', top: 0, right: 14, width: 10, zIndex: 0,
                  height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)',
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={onView}><ListItemIcon> <VisibilityIcon fontSize="small" sx={{ color: "rgba(255, 179, 46, 0.7)", fontSize: "15px" }} /> </ListItemIcon><Typography variant="body2" color="initial" ml={-1.5}>View</Typography></MenuItem>
            <MenuItem onClick={onEdit}><ListItemIcon><EditIcon fontSize="small" sx={{ color: "rgba(101, 176, 255, 0.7)", fontSize: "15px" }} /></ListItemIcon><Typography variant="body2" color="initial" ml={-1.5}>Edit</Typography></MenuItem>
            <MenuItem onClick={onDelete}><ListItemIcon><DeleteIcon fontSize="small" sx={{ color: "rgba(255, 80, 80, 0.7)", fontSize: "15px" }} /></ListItemIcon><Typography variant="body2" color="initial" ml={-1.5}>Delete</Typography></MenuItem>
          </Menu>
        </div>
      );
    },
  },
];



const Basic__Information = () => {
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
    // Add more options here
  ];
  
  return (
    <>
      <Breadcrumb title="Employee" breadcrumbItem="Basic Information" />

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
                  {/* Add more options here */}
                </Select>
              </Grid>
              <Grid item md={4}>
                <InputLabel htmlFor="currentPosition">Position<span style={{ color: "red" }}>*</span></InputLabel>
                <Select fullWidth id="currentPosition">
                  <MenuItem value=""><em>Select an option</em></MenuItem>
                  <MenuItem value="Option 1">Option 1</MenuItem>
                  <MenuItem value="Option 2">Option 2</MenuItem>
                  {/* Add more options here */}
                </Select>
              </Grid>
              {/* Images  */}
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

      <Box mt={2}>
        <Card sx={{ width:'100%', overflowX:'scroll'}}>
          <CardContent >
            <MyTableContainer
              columns={columns}
              data={rows}
              tableHeading="Employee Basic Information"
              isAddNewButton={true}
              customPageSize={10}
              />
          </CardContent>
        </Card>
      </Box>


    </>
  )
}

export default Basic__Information
// { field: 'id', headerName: 'ID', width: 100, renderCell: renderNullInRed },