import React, { useState } from "react";
import "../../Styles.css";
import { Typography, Box, Container,Card,CardContent } from "@mui/material";
import { education } from "../../../Data/Dummy_Data/Dummy__Data";
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
  { field: "education", headerName: "Education", type: "string", width: 150, align: 'left', renderCell: renderNullInRed },
  {
    field: "major_subject", headerName: "Subject", type: "string", width:150, renderCell: renderNullInRed,
    valueGetter: (params) => `${params.row.education || ""}`,
  },
  {
    field: "institution_name", headerName: "Name", type: "string", width: 230, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.institution_name || "",
  },
  {
    field: "education_start_date", headerName: "Start Date", type: "string", width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.education_start_date || "",
  },
  {
    field: "education_end_date", headerName: "End Date", type: "string", width: 130, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.education_end_date || "",
  },
  {
    field: "grade", headerName: "Grade", type: "string", width: 130, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.grade || "",
  },
  {
    field: "scale", headerName: "Scale", type: "string", width: 110,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.scale || "",
  },
  {
    field: "employee", headerName: "Employee Name", type: "string", width: 200, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.employee || "",
  },
  {
    field: "level_of_education", headerName: "Education Level", align:'center',type: "string", width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.level_of_education || "",
  },
  {
    field: 'institution_country', headerName: 'Country', type: 'string', width: 180,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.institution_country|| "",},

];

const Education = () => {
  return (
    <>
 <Breadcrumb title="Education" breadcrumbItem="Employee / Education" />
         <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={education}
            tableHeading="Education"
            isAddNewButton={true}
            customPageSize={10}
            route={'/employee/basic_information/AddEmployee'}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Education;
