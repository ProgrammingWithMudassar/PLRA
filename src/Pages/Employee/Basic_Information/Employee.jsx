import React, { useState } from 'react'
import "../../Styles.css"
import {
  Typography, Box, Button, Grid, Tooltip
} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Breadcrumb from '../../../Components/Common/BreadCrumb.jsx';
import { MyTableContainer } from '../../../Components/index.js';
import { rows } from '../../../Data/Dummy_Data/Dummy__Data.js'
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '../../../Assets/Icons/Icons.js';
import {
  Basic_Info, Personal_Info
} from './Employee_Tabs/index.js';
import New_Emp_Basic_Emp from './Add_New/New_Emp_Basic_info.jsx'
import { TabBar } from '../../../Components/index'



const renderNullInRed = (params) => {
  const value = params.value;
  if (value === null) {
    return <span style={{ color: 'red' }}>Null</span>;
  }
  return value;
};



const Employee = () => {
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [value, setValue] = React.useState('1');
  const [New_Emp_Form, setNew_Emp_Form] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
    <TabBar />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Breadcrumb title="Employee" breadcrumbItem="Employee / Basic Information" />
        <Tooltip title="New">
          <Button sx={{ padding: "0.3rem 0rem", height: "30px" }} onClick={() => setNew_Emp_Form(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Tooltip>
      </Box>
      <MyTableContainer
        columns={columns}
        data={rows}
        tableHeading="Employee"
        isAddNewButton={true}
        customPageSize={17}
        route={'/employee/basic_information/AddEmployee'}
      />


      {/* New Employee Dialog Box  */}
      <Dialog
        open={New_Emp_Form}
        onClose={() => setNew_Emp_Form(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            position: 'absolute', top: '45%', left: '48%',
            transform: 'translate(-50%, -50%)', color: 'black', padding: "10px 0 10px 30px",
            minHeight: "85vh"
          }
        }}>
        <Grid container spacing={8} sx={{ pt: 2, px: 4, pb: 4 }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: "space-between" }}>
            <Typography variant="body1" color="initial"></Typography>
            <Typography variant="h4" color="initial" fontWeight={600} sx={{ color: theme.palette.primary.main }}>New Employee</Typography>
            <Tooltip title="Close">
              <Button onClick={() => setNew_Emp_Form(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </Tooltip>
          </Grid>
          {/* <Drawar_Tabbar /> */}
          <Box sx={{ width: '100%', borderRadius: '8px', marginLeft: '25px' }}>
            <TabContext value={value} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                  <Tab label="Basic Information" value="1" />
                  <Tab label="Personal Information" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1"><New_Emp_Basic_Emp  /></TabPanel>
              <TabPanel value="2"><Personal_Info /></TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Dialog>






      {/* Update Dialog Box  */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            position: 'absolute', top: '45%', left: '48%',
            transform: 'translate(-50%, -50%)', color: 'black', padding: "10px 0 10px 30px",
            minHeight: "85vh"
          }
        }}>
        {selectedRowData && (
          <Grid container spacing={8} sx={{ pt: 2, px: 4, pb: 4 }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: "space-between" }}>
              <Typography variant="body1" color="initial"></Typography>
              <Typography variant="h4" color="initial" fontWeight={600} sx={{ color: theme.palette.primary.main }}>
                {selectedRowData.title.employee_title} {selectedRowData.first_name} {selectedRowData.last_name} : {selectedRowData.employee_no}
              </Typography>
              <Tooltip title="Close">
                <Button onClick={() => setDialogOpen(false)}>
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </Tooltip>
            </Grid>
            {/* <Drawar_Tabbar /> */}
            <Box sx={{ width: '100%', borderRadius: '8px', marginLeft: '25px' }}>
              <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange}>
                    <Tab label="Basic Information" value="1" />
                    <Tab label="Personal Information" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1"><Basic_Info Id={selectedRowData.id} /></TabPanel>
                <TabPanel value="2"><Personal_Info /></TabPanel>
              </TabContext>
            </Box>
          </Grid>
        )}
      </Dialog>
    </>
  )
}

export default Employee