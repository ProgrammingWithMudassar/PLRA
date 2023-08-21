import React from "react";
import "../../Styles.css";
import { Typography, Box, Container,Card,CardContent } from "@mui/material";
import { employeeHistory} from "../../../Data/Dummy_Data/Dummy__Data";
import { MyTableContainer } from '../../../Components/index.js';
import Breadcrumb from "../../../Components/Common/BreadCrumb";
const renderNullInRed = (params) => {
  const value = params.value;
   if (value === null) {
     return <span style={{ color: 'red' }}>Null</span>;
   }
   return value;
 };

  const columns = [
    {   field: "organization_name", headerName: "Organization Name", type: "string", width: 200 , align: 'left', 
    renderCell: renderNullInRed,  valueGetter: (params) => params.row.organization_name || "", },
    {
      field: "position_held", headerName: "Position Held", type: "string", width: 150, renderCell: renderNullInRed,
      valueGetter: (params) => `${params.row.position_held || ""}`,
    },
    {
      field: "employment_start_date", headerName: "Start Date", type: "string", width: 150, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.employment_start_date || "",
    },
    {
      field: "employment_end_date", headerName: "End Date", type: "string", width: 130 , renderCell: renderNullInRed,
      valueGetter: (params) => params.row.employment_end_date || "",
    },
    {
      field: "leaving_reason", headerName: "Leaving Reason", type: "string", align:'center',width: 150, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.leaving_reason || "",
    },
    {
      field: "organization_contact_number", headerName: "Contact Number", type: "number", align:'center',width: 150, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.organization_contact_number || "",
    },
    {
      field: "organization_address", headerName: "Organization Address", type: "string",align:'center', width: 200, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.organization_address || "",
    },
    {
      field: "government_job", headerName: "Government Job", type: "string", width: 150 ,align:'center', renderCell: renderNullInRed,
      valueGetter: (params) => params.row.government_job || "",
    },
    {
      field: "employee", headerName: "Employee Name", type: "string", align:'center',width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.employee || "",
    },
    {
      field: "job_district", headerName: "Job District", type: "number", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.job_district|| "",
    },
  
  ];
const References = () => {
  return (
    <>
      <Breadcrumb title="History" breadcrumbItem="Employee /Employment History" />
         <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={employeeHistory}
            tableHeading="Employement History "
            isAddNewButton={true}
            customPageSize={10}
            route={'/employee/basic_information/AddEmployee'}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default References;
