import React, { useState } from 'react'
import "../../Styles.css"
import {
  Card, CardContent, MenuItem, Menu,
  Typography, Box, Button, Grid
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
import { Link, useNavigate } from 'react-router-dom'
import Drawar_Tabbar from '../Drawar_Tabbar';
import avartar from '../../../Assets/png/avatar.jpg'
import "../../Styles.css"

const renderNullInRed = (params) => {
  const value = params.value;
  if (value === null) {
    return <span style={{ color: 'red' }}>Null</span>;
  }
  return value;
};



const Basic__Information = () => {
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const theme = useTheme();


  const columns = [
    {
      field: "employee_no", headerName: "Employee No", type: "string", width: 200, renderCell: renderNullInRed,
      renderCell: (params) => {
        const onView = () => {
          setSelectedRowData(params.row); 
          setDialogOpen(true); 
        };
        return (
          <span className="table_first_column" onClick={onView}>{params.value}</span>
        )
      }
    },
    { field: "cnic", headerName: "CNIC", type: "string", width: 200, align: 'left', renderCell: renderNullInRed },
    {
      field: "name", headerName: "Name", type: "string", width: 200, renderCell: renderNullInRed,
      valueGetter: (params) => `${params.row.first_name || ""} ${params.row.last_name || ""}`,
    },
    {
      field: "center_name", headerName: "Center Name", type: "string", width: 200, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.center.center_name || "",
    },
    {
      field: "job", headerName: "Job", type: "string", width: 170, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.position.job.job_title || "",
    },
    {
      field: "wingName", headerName: "Wing", type: "string", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.position.wing.wing_name || "",
    },
    
  ];

  return (
    <>
      <Breadcrumb title="Basic Information" breadcrumbItem="Employee / Basic Information" />
      <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={rows}
            tableHeading="Employee"
            isAddNewButton={true}
            customPageSize={10}
            route={'/employee/basic_information/AddEmployee'}
          />
        </CardContent>
      </Card>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{ style: { position: 'absolute', top: '45%', left: '48%', transform: 'translate(-50%, -50%)', color: 'black', padding: "10px 0 10px 30px", } }}>
        {selectedRowData && (
          <Grid container spacing={8} sx={{ p: 2 }}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="initial" fontWeight={600} sx={{ color: theme.palette.primary.main }}>
                {selectedRowData.title.employee_title} {selectedRowData.first_name} {selectedRowData.last_name} : {selectedRowData.employee_no}
              </Typography>
            </Grid>

            <Drawar_Tabbar />
            <Grid item sx={{ width: "100%" }} xs={12} md={3}>
              <Button variant='contained' sx={{ width: "120px", mr: '20px' }} >Edit</Button>
              <Box className="Basic_Profile_Img" sx={{ mb: 4, objectFit: 'contain', overflow: 'hidden' }}>
                <img src={avartar} alt="" width={200} />
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Reporting Officer :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.reporting_officer}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 1 }}>
                <label name="name">Name :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.first_name} {selectedRowData.last_name}</Typography>
              </Box>
              <Box>
                <label name="name">CNIC :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.service_duration}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Reporting Officer :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.reporting_officer}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3} >
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Reporting Officer :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.reporting_officer}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Reporting Officer :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.reporting_officer}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3} >
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Reporting Officer :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.reporting_officer}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Reporting Officer :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.reporting_officer}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'right', mt: -6, width: "350px" }}>
              <Link to={`/employee/basic_information/EditEmployee/${selectedRowData.id}`}>
                <Button variant='contained' sx={{ width: "120px", mr: '20px' }} >Edit</Button>
              </Link>
              <Button variant='outlined' sx={{ width: "120px" }} onClick={() => setDialogOpen(false)}>Close</Button>
            </Grid>
          </Grid>
        )}
      </Dialog>
    </>
  )
}

export default Basic__Information