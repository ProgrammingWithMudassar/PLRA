import React from "react";
import "../../Styles.css";
import { Typography, Box, Container,Card,CardContent } from "@mui/material";
import { employeeReference} from "../../../Data/Dummy_Data/Dummy__Data";
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
    {  field: "referance_name", headerName: "Reference Name", type: "string", width: 200, align: 'left', 
    renderCell: renderNullInRed,  valueGetter: (params) => params.row. referance_name || "", },
    {
      field: "relation", headerName: "Relation ", type: "string", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => `${params.row.relation || ""}`,
    },
    {
      field: "company_name", headerName: "Company Name",align:'center', type: "string", width: 200, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.company_name || "",
    },
    {
      field: "Designation", headerName: "Designation", type: "string", align:'center',width: 170 , renderCell: renderNullInRed,
      valueGetter: (params) => params.row.Designation || "",
    },
    {
      field: "years_known", headerName: "Years Known", type: "number",align:'center',width: 110, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.years_known || "",
    },
    {
      field: "phoneNumber", headerName: "Phone Number", type: "number", width: 170, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.phoneNumber || "",
    },
    {
      field: "company_address", headerName: "Company Address", type: "string", width: 150, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.company_address || "",
    },
    {
      field: "employee", headerName: "Employee Name", type: "string", width: 130, renderCell: renderNullInRed,
      valueGetter: (params) => params.row.employee || "",
    },
  
  ];
const References = () => {
  return (
    <>
      <Breadcrumb title="References" breadcrumbItem="Employee /References" />
         <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={employeeReference}
            tableHeading="References"
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
