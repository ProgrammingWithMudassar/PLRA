import React from "react";
import "../../Styles.css";
import { Typography, Box, Container ,Card,CardContent } from "@mui/material";

import { MyTableContainer } from '../../../Components/index.js';
import Breadcrumb from "../../../Components/Common/BreadCrumb";
import { skill, training } from "../../../Data/Dummy_Data/Dummy__Data";
const renderNullInRed = (params) => {
 const value = params.value;
  if (value === null) {
    return <span style={{ color: 'red' }}>Null</span>;
  }
  return value;
};
const columns = [
  { field: "skill", headerName: "Skills", type: "string", width: 200, align: 'left', renderCell: renderNullInRed , valueGetter: (params) => `${params.row.skill || ""}`,},
  {
    field: "skill_date", headerName: "Date", type: "string", width: 200, renderCell: renderNullInRed,
    valueGetter: (params) => `${params.row.skill_date || ""}`,
  },
  {
    field: "years_of_experience", headerName: "Experience", type: "string", width: 200, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.years_of_experience || "",
  },
  {
    field: "verified", headerName: "Verified", type: "string", width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row. verified || "",
  },
  {
    field: "verified_by", headerName: "verified_by ", type: "string", width: 130, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.verified_by  || "",
  },
  {
    field: "level_of_skill", headerName: "level_of_skill", type: "string",align:'center', width: 130, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.level_of_skill || "",
  },

];

const Skills = () => {
  return (
    <>
      <Breadcrumb title="Skills" breadcrumbItem="Employee/Skills" />
         <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={skill}
            tableHeading="Skills"
            isAddNewButton={true}
            customPageSize={10}
            route={'/employee/basic_information/AddEmployee'}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Skills;
