import React, { useState } from 'react'
import "../../Styles.css"
import {
  Typography, Box, Button, Grid, TextField
} from "@mui/material";
import Breadcrumb from '../../../Components/Common/BreadCrumb.jsx';
import { MyTableContainer } from '../../../Components/index.js';
import '../../Styles.css'
import { rows } from '../../../Data/Dummy_Data/Dummy__Data.js'
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'
import Drawar_Tabbar from '../Drawar_Tabbar';
import avartar from '../../../Assets/png/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare, faPlus } from '../../../Assets/Icons/Icons.js';
import Tooltip from '@mui/material/Tooltip';
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
      <Breadcrumb
        title="Employee"
        breadcrumbItem="Employee / Basic Information"
        buttons={["New"]}
        routes={{
          plus: "/employee/personal_information",
        }}
      />
      <MyTableContainer
        columns={columns}
        data={rows}
        tableHeading="Employee"
        isAddNewButton={true}
        customPageSize={17}
        route={'/employee/basic_information/AddEmployee'}
      />

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            position: 'absolute', top: '45%', left: '48%',
            transform: 'translate(-50%, -50%)', color: 'black', padding: "10px 0 10px 30px",
          }
        }}>
        {selectedRowData && (
          <Grid container spacing={8} sx={{ pt: 2, px: 4, pb: 4 }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: "space-between" }}>
              <Typography variant="body1" color="initial"></Typography>
              <Typography variant="h4" color="initial" fontWeight={600} sx={{ color: theme.palette.primary.main }}>
                {selectedRowData.title.employee_title} {selectedRowData.first_name} {selectedRowData.last_name} : {selectedRowData.employee_no}
              </Typography>
              <Button onClick={() => setDialogOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </Grid>

            <Drawar_Tabbar />
            <Grid item xs={12} mt={-5} sx={{ display: "flex", justifyContent: "flex-end" }} >
              <Link to="/employee/basic_information/AddEmployee">
                <Tooltip title="Edit">
                  <Button sx={{ mt: -3 }}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                </Tooltip>
              </Link>
            </Grid>
            <Grid item xs={12} md={3} mt={-6} sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Box className="Basic_Profile_Img" sx={{ mb: 4, objectFit: 'contain', overflow: 'hidden' }}>
                <img src={avartar} alt="" width={200} />
              </Box>
            </Grid>

            <Grid item xs={12} md={4} mt={-6}>
              <Box className="dataView">
                <label name="name">Employee No :</label>
                <TextField id="" label="" value={selectedRowData.employee_no} disabled/>
              </Box>
              <Box className="dataView">
                <label name="name">Name :</label>
                <TextField id="" label="" defaultValue={selectedRowData.first_name}  />
              </Box>
              <Box className="dataView">
                <label name="name">Father Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.father_name}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">CNIC:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.cnic}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Phone Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.phoneNumber}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Passport Number:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.passport_number}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Joining Date:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.date_of_joining}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Reporting Officer:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.reporting_officer}</Typography>
              </Box>
              
            </Grid>

            <Grid item xs={12} md={4} mt={-6}>
              <Box className="dataView">
                <label name="name">Center Name:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.center.center_name}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Region:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.center.region}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Domicile District:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.domicile_district}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Service Duration:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.service_duration}</Typography>
              </Box>
              {/* <Box className="dataView">
                <label name="name">Job:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.position.job.job_title}</Typography>
              </Box> */}
              <Box className="dataView">
                <label name="name">Job Abbrivation:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.position.job_level.job_abbrivation}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Position:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.position.position_id}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Position Type:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.position.position_type.position_type_name}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Wing:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.position.wing.wing_name}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name">Sub Wing:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.position.sub_wing.sub_wing_name}</Typography>
              </Box>
            </Grid>

          </Grid>
        )}
      </Dialog>
    </>
  )
}

export default Basic__Information