import React , {useState} from "react";
import "../../Styles.css";
import { Typography, Box, Container ,Card,CardContent,Grid,Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { MyTableContainer } from '../../../Components/index.js';
import Breadcrumb from "../../../Components/Common/BreadCrumb";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import Drawar_Tabbar from '../Drawar_Tabbar';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom'
import { training } from "../../../Data/Dummy_Data/Dummy__Data";
import avartar from '../../../Assets/png/avatar.jpg'

import Theme from '../../../Theme/Light__Theme'
const renderNullInRed = (params) => {
 const value = params.value;
  if (value === null) {
    return <span style={{ color: 'red' }}>Null</span>;
  }
  return value;
};


const Training = () => {
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const theme = useTheme();
  const columns = [
    { field: "training_topic", headerName: "Training Topic", type: "string", width: 200, align: 'left',
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
    {
      field: "training_nature", headerName: "Training Nature", type: "string", width: 200, renderCell: renderNullInRed,
      valueGetter: (params) => `${params.row.training_nature || ""}`,
    },
    {
      field: "status", headerName: "Status", type: "string", width: 200, renderCell:  (params) => {
        const status = params.value;
        let statusStyle = {};
        let statusIcon = null;
        if (status === "Completed") {
          statusStyle = { borderColor: Theme.palette.success.main, color: Theme.palette.success.main, };
          statusIcon = <DoneIcon style={{ color: Theme.palette.success.main ,}} />;
        } else if (status === "OnGoing") {
          statusStyle = { borderColor: Theme.palette.secondary.main, color: Theme.palette.secondary.main };
          statusIcon = <AutorenewIcon style={{ color: Theme.palette.secondary.main,fontSize: 20  }} />;
        }
  
        return (
          <div style={{ display: 'flex', alignItems: 'center', ...statusStyle }}>
            {statusIcon}
            <span style={{ marginLeft: '4px' }}>{status}</span>
          </div>
        );
      },
      
      valueGetter: (params) => params.row.status || "",
    },
    {
      field: "training_start_date", headerName: "Start_date", type: "string", width: 150, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.training_start_date || "",
    },
    {
      field: "training_end_date", headerName: "End_date", type: "string", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.training_end_date || "",
    },
    {
      field: "score_required_to_pass", headerName: "Passing Score", type: "string",align:'center', width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.score_required_to_pass || "",
    },
    {
      field: "obtained_score", headerName: "Obtained Score", type: "string", width: 130,align:'center', renderCell: renderNullInRed,
      valueGetter: (params) => params.row.obtained_score || "",
    },
    {
      field: "remarks", headerName: "Remarks", type: "string", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.remarks || "",
    },
  ];
  return (
    <>
 <Breadcrumb title="Training" breadcrumbItem="Employee/Training" />
         <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={training}
            tableHeading="Training"
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
                {selectedRowData.training_topic}  : {selectedRowData.training_nature}
              </Typography>
            </Grid>

            <Drawar_Tabbar />
            <Grid item sx={{ width: "100%" }} xs={12} md={3}>
              <Button variant='contained' sx={{ width: "120px", mr: '20px' }} >Edit</Button>
              <Box className="Basic_Profile_Img" sx={{ mb: 4, objectFit: 'contain', overflow: 'hidden' }}>
                <img src={avartar} alt="" width={200} />
              </Box>
        
            </Grid>

            <Grid item xs={12} md={3}>
            <Box sx={{ mb: 1 }}>
                <label name="name">Training Topic:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.training_topic}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Traing Nature:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.training_nature}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Status :</label>
                <Typography variant="body2" color="initial" >{selectedRowData.status}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Start Date</label>
                <Typography variant="body2" color="initial" >{selectedRowData.training_start_date} </Typography>
              </Box>
             
              {/* <Box sx={{ mb: 1 }}>
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
              </Box> */}
            </Grid>
            <Grid item xs={12} md={3} >
            <Box>
                <label name="name">End Date</label>
                <Typography variant="body2" color="initial" >{selectedRowData.training_end_date}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name"> Passing Score</label>
                <Typography variant="body2" color="initial" >{selectedRowData.score_required_to_pass}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Score Obtained</label>
                <Typography variant="body2" color="initial" >{selectedRowData.obtained_score}</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <label name="name">Remarks:</label>
                <Typography variant="body2" color="initial" >{selectedRowData.remarks}</Typography>
              </Box>
           
            </Grid> 

            {/* <Grid item xs={12} md={3} >
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
            </Grid> */}

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
  );
};

export default Training;

