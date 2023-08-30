import React, { useState } from 'react'
import { Grid, Box, Typography, TextField, Tooltip, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Multi_Dropdown } from '../../../../Components/index.js';
import { Center } from '../../../../Data/Dummy_Data/Dummy__Data.js';
import { faFloppyDisk } from '../../../../Assets/Icons/Icons.js';
import avartar from '../../../../Assets/png/avatar.jpg';
import '../../../Styles.css';
import { District,Wing,SubWing} from '../../../../Data/Dummy_Data/Dummy__Data.js';


const New_Emp_Basic_info = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCenterName, setSelectedCenterName] = useState('');
  const [selectedDistrictName1, setSelectedDistrictName1] = useState('');
  const [selectedWingName, setSelectedWingName] = useState('');
  const [selectedSubWingName, setSelectedSubWingName] = useState('');
  const [isWingDialogOpen, setIsWingDialogOpen] = useState(false);
  const [isDistrictDialogOpen, setIsDistrictDialogOpen] = useState(false);
  const [isSubWingDialogOpen, setIsSubWingDialogOpen] = useState(false);
  const renderNullInRed = (params) => {
    const value = params.value;
    if (value === null) {
      return <span style={{ color: 'red' }}>Null</span>;
    }
    return value;
  };


  const centerColumns = [
   
    { field: "center_id", headerName: "CNIC", type: "string", width: 200, align: 'left', renderCell: renderNullInRed },
    {
      field: "center_name", headerName: "Name", type: "string", width: 200, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.center_name || "", renderCell: (params) => {
       
        return (
          <span className="table_first_column" >{params.row.center_name}</span>
        )
      }
    },

    {
      field: "district", headerName: "Job", type: "string", width: 170, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.district || "",
    },
    {
      field: "tehsil", headerName: "Tehsil", type: "string", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.tehsil || "",
    },
  

  ];
  const DistrictColumns = [
   
    { field: "region_id", headerName: "CNIC", type: "string", width: 110, align: 'left', renderCell: renderNullInRed },
    {
      field: "region_name", headerName: "Name", type: "string", width: 200, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.region_name || "", renderCell: (params) => {
       
        return (
          <span className="table_first_column" >{params.row.region_name}</span>
        )
      }
    },
  
  ];
  const WingColumns = [
   
    {
      field: "wing_id",
      headerName: "Wing ID",
      width: 110,
    },
    {
      field: "wing_name",
      headerName: "Wing Name",
      width: 200, renderCell: (params) => {
       
        return (
          <span className="table_first_column" >{params.row.wing_name}</span>
        )
      }
    },
    {
      field: "search_name",
      headerName: "Search Name",
      width: 200,
    },
    {
      field: "operating_unit_type",
      headerName: "Operating Unit Type",
      width: 150,
    },
  ];
  const SubWingColumns = [

  {
    field: "sub_wing_id",
    headerName: "Sub Wing ID",
    width: 150,
  },
  {
    field: "sub_wing_name",
    headerName: "Sub Wing Name",
    width: 200, renderCell: (params) => {
       
      return (
        <span className="table_first_column" >{params.row.sub_wing_name}</span>
      )
    }
  },
  {
    field: "wing_id",
    headerName: "Wing ID",
    width: 120,
  },
];




  const openDialog = () => {
    setIsDialogOpen(true);
  };
  
  const openDistrict = () => {
   setIsDistrictDialogOpen(true);
  };
  const openWing = () => {
    setIsWingDialogOpen(true);
   };
   const openSubWing = () => {
    setIsSubWingDialogOpen(true);
   };


  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsDistrictDialogOpen(false);
    setIsWingDialogOpen(false);
    setIsSubWingDialogOpen(false);
  };
 

  const handleselectcenter = (selectedRow) => {
    setSelectedCenterName(selectedRow.center_name);
    closeDialog();

  };
  const handleSelectDistrict = (selectedRow) => {
    setSelectedDistrictName1(selectedRow.region_name);
    closeDialog();
  };
  const handleSelectWing = (selectedRow) => {
    setSelectedWingName(selectedRow.wing_name)
    closeDialog();
  };
  const handleSelectSubWing = (selectedRow) => {
   setSelectedSubWingName(selectedRow.sub_wing_name)
    closeDialog();
  };




  return (
    <div>
      { console.log('center name',selectedCenterName)}
      <Grid container spacing={8}>
        <Grid item xs={12} mb={-6} mt={2} sx={{ display: "flex", justifyContent: "flex-end" }} >
          <Tooltip title="Save">
            <Button sx={{ mt: -3 }} >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </Button>
          </Tooltip>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box className="Basic_Profile_Img" sx={{ mb: 4, objectFit: 'contain', overflow: 'hidden' }}>
            <img src={avartar} alt="" width={200} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} >
          <Box className="dataView">
            <label name="name">Employee No :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Title :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Name :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Father Name:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">CNIC:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Phone Number:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Passport Number:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Joining Date:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Reporting Officer:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Assigning Officer:</label>
            <TextField id="" label="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="dataView">
            <label name="name">Center Name:</label>
            <TextField id="name" label="" value={selectedCenterName  || ''} readOnly onClick={openDialog}/>
            <Multi_Dropdown open={isDialogOpen} onClose={closeDialog}   onSelect={handleselectcenter}centers={Center} columns={centerColumns}  />
          </Box>
          <Box className="dataView">
            <label name="name">District:</label>
            <TextField id="" label=""  value={selectedDistrictName1  || ''} readOnly onClick={openDistrict}/>
            <Multi_Dropdown open={isDistrictDialogOpen} onClose={closeDialog} centers={District} columns={DistrictColumns} onSelect={handleSelectDistrict}
   />
  </Box>
          <Box className="dataView">
            <label name="name">Tehsil:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Job :</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Job Level:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Position:</label>
            <TextField id="" label=""  />
          </Box>
          <Box className="dataView">
            <label name="name">Position Type:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">PPG Level:</label>
            <TextField id="" label="" />
          </Box>
          <Box className="dataView">
            <label name="name">Wing:</label>
            <TextField id="" label="" value={selectedWingName || ''} readOnly  onClick={openWing}/> 
            <Multi_Dropdown open={isWingDialogOpen} onClose={closeDialog} centers={Wing} columns={WingColumns} onSelect={handleSelectWing}
 />
          </Box>
          <Box className="dataView">
            <label name="name">Sub Wing:</label>
            <TextField id="" label=""   value={selectedSubWingName || ''} readOnly onClick={openSubWing}/>
         <Multi_Dropdown open={isSubWingDialogOpen} onClose={closeDialog} centers={SubWing} columns={SubWingColumns} onSelect={handleSelectSubWing}
          />
          </Box>
        </Grid>

      </Grid>
    </div >
  )
}

export default New_Emp_Basic_info