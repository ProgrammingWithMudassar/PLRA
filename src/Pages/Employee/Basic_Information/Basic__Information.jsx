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
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "employee_no", headerName: "Employee No", type: "string", width: 200, renderCell: renderNullInRed },
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
      field: "job", headerName: "Job", type: "string", width: 150, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.position.job.job_title || "",
    },
    {
      field: "wingName", headerName: "Wing Name", type: "string", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.position.wing.wing_name || "",
    },
    {
      field: 'Action', headerName: 'Action', type: 'string', width: 140,

      renderCell: (params) => {
        const [anchorEl, setAnchorEl] = React.useState(null);


        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => setAnchorEl(null);
        const onEdit = () => {
          handleClose();
        }
        const onDelete = () => handleClose();
        const onView = () => {
          setSelectedRowData(params.row); // Set selected row data
          setDialogOpen(true); // Open the dialog
          handleClose();
        };;
        console.log("hi", selectedRowData);

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

  return (
    <>
      <Breadcrumb title="Employee" breadcrumbItem="Basic Information" />
      <Box mt={2} sx={{ overflow: 'scroll' }}>
        <Card sx={{ width: '100%', overflowX: 'scroll' }}>
          <CardContent >
            <MyTableContainer
              columns={columns}
              data={rows}
              tableHeading="Employee Basic Information"
              isAddNewButton={true}
              customPageSize={10}
              route={'/employee/basic_information/AddEmployee'}
            />
          </CardContent>
        </Card>
      </Box>

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

            <Grid item sx={{ width: "100%" }} xs={12} md={3}>
              <Box className="Basic_Profile_Img" sx={{ mb: 4 }}>Image</Box>
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
                <Typography variant="body2" color="initial" >{selectedRowData.cnic}</Typography>
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