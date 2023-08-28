import React from "react";
import "../../Styles.css";
import { Typography, Box, Container,Card,CardContent } from "@mui/material";
import {  contactNumber} from "../../../Data/Dummy_Data/Dummy__Data";
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
  
  {
    field: "employee", headerName: "Employee Name", type: "string", width: 100, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.employee|| "",
  },
  {
    field: "purpose", headerName: "Purpose", type: "string", width: 110, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.purpose || "",
  },
  {
    field: "type", headerName: "Type", type: "string", width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.type || "",
  },
  {
    field: "contact_no_address", headerName: "Contact Info", type: "string", width: 230, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.contact_no_address || "",
  },
  {
    field: "is_primary", headerName: "Is_primary", type: "string", width:110,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.is_primary || "",
  },


];

const Contact__Information = () => {
  return (
    <>
      <Breadcrumb
        title="Contacts"
        breadcrumbItem="Employee /Contacts"
        buttons={["New"]}
        routes={{
          plus: "/employee/personal_information",
        }}
      />
      <MyTableContainer
        columns={columns}
        data={contactNumber}
        tableHeading="Contacts"
        isAddNewButton={true}
        customPageSize={17}
        route={'/employee/basic_information/AddEmployee'}
      />
    </>
  );
};

export default Contact__Information;
