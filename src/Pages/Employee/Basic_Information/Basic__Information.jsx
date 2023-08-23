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
import { faXmark, faPenToSquare, faFloppyDisk } from '../../../Assets/Icons/Icons.js';
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
  const [edit, setEdit] = useState(true);



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

  const handleEdit = () => {
    setEdit(!edit)
  }

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
            <Grid item xs={12} mt={-3} sx={{ display: "flex", justifyContent: "flex-end" }} >
              {
                edit ?
                  <Tooltip title="Save">
                    <Button sx={{ mt: -3 }}>
                      <FontAwesomeIcon icon={faFloppyDisk} />
                    </Button>
                  </Tooltip>
                  :
                  null
              }
              <Tooltip title="Edit">
                <Button sx={{ mt: -3 }} onClick={handleEdit}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
              </Tooltip>

            </Grid>
            <Grid item xs={12} md={3} mt={-6} sx={{ height: '100%' }}>
              <Box className="Basic_Profile_Img" sx={{ mb: 4, objectFit: 'contain', overflow: 'hidden' }}>
                <img src={avartar} alt="" width={200} />
              </Box>
              <Box className="dataView">
                <label name="name" style={{ width: "40%" }}>Service Duration:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.service_duration}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name" style={{ width: "40%" }}>CNIC:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.cnic}</Typography>
              </Box>
              <Box className="dataView">
                <label name="name" style={{ width: "40%" }}>Job:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.position.job.job_title}</Typography>
              </Box>
            </Grid>

            {/* Second */}
            <Grid item xs={12} md={4} mt={-6}>
              <Box className="dataView">
                <label name="name">Employee No :</label>
                <TextField id="" label="" defaultValue={selectedRowData.employee_no} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Title :</label>
                <TextField id="" label="" defaultValue={selectedRowData.title.employee_title} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Name :</label>
                <TextField id="" label="" defaultValue={selectedRowData.first_name} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Father Name:</label>
                <TextField id="" label="" defaultValue={selectedRowData.father_name} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">CNIC:</label>
                <TextField id="" label="" defaultValue={selectedRowData.cnic} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Phone Number:</label>
                <TextField id="" label="" defaultValue={selectedRowData.phoneNumber} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Passport Number:</label>
                <TextField id="" label="" defaultValue={selectedRowData.passport_number} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Joining Date:</label>
                <TextField id="" label="" defaultValue={selectedRowData.date_of_joining} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Reporting Officer:</label>
                <TextField id="" label="" defaultValue={selectedRowData.reporting_officer} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Assigning Officer:</label>
                <TextField id="" label="" defaultValue={selectedRowData.counter_assigning_officer} disabled={!edit} />
              </Box>
            </Grid>

            {/* Third  */}
            <Grid item xs={12} md={4} mt={-6}>
              <Box className="dataView">
                <label name="name">Center Name:</label>
                <TextField id="" label="" defaultValue={selectedRowData.center.center_name} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">District:</label>
                <TextField id="" label="" defaultValue={selectedRowData.domicile_district} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Tehsil:</label>
                <TextField id="" label="" defaultValue={selectedRowData.center.tehsil} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Job :</label>
                <TextField id="" label="" defaultValue={selectedRowData.position.job.job_title} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Job Level:</label>
                <TextField id="" label="" defaultValue={selectedRowData.position.job_level.job} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Position:</label>
                <TextField id="" label="" defaultValue={selectedRowData.position.position_id} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Position Type:</label>
                <TextField id="" label="" defaultValue={selectedRowData.position.position_type.position_type_name} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">PPG Level:</label>
                <TextField id="" label="" defaultValue={selectedRowData.position.job.ppg_level} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Wing:</label>
                <TextField id="" label="" defaultValue={selectedRowData.position.wing.wing_name} disabled={!edit} />
              </Box>
              <Box className="dataView">
                <label name="name">Sub Wing:</label>
                <TextField id="" label="" defaultValue={selectedRowData.position.sub_wing.sub_wing_name} disabled={!edit} />
              </Box>
            </Grid>
          </Grid>
        )}
      </Dialog>
    </>
  )
}

export default Basic__Information