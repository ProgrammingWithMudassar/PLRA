import React from "react";
import "../../Styles.css";
import { Typography, Box, Container ,Card,CardContent} from "@mui/material";
import Breadcrumb from "../../../Components/Common/BreadCrumb";
import { MyTableContainer } from "../../../Components";
import { familyInformation } from "../../../Data/Dummy_Data/Dummy__Data";



const renderNullInRed = (params) => {
  const value = params.value;
   if (value === null) {
     return <span style={{ color: 'red' }}>Null</span>;
   }
   return value;
 };
const columns = [

  {
    field: 'full_name',
    headerName: 'Full Name',
    type: 'string',
    width: 200,
    align: 'left',renderCell: renderNullInRed,
    valueGetter: (params) => `${params.row.full_name|| ""}`,
  },

  {
    field: 'birth_Date',
    headerName: 'Birth Date',
    type: 'string',
    width: 200,
    align: 'left',renderCell: renderNullInRed,
    valueGetter: (params) => params.row.birth_Date || "",
  },
  {
    field: 'relation',
    headerName: 'Relation',
    type: 'string',
    width: 130,
    align: 'left',renderCell: renderNullInRed,
    valueGetter: (params) => params.row.relation || "",
  },
  {
    field: 'is_dependent',
    headerName: 'Is Dependent',
    type: 'string',
    width: 200,
    align: 'center',renderCell: renderNullInRed,
    valueGetter: (params) => params.row.is_dependent|| "",
  },
  {
    field: 'employee',
    headerName: 'Employee',
    type: 'string',
    width: 200,
    align: 'left', renderCell: renderNullInRed,
    valueGetter: (params) => params.row.employee || "",
  },
  

];
const Family__Information = () => {
  return (
    <>
      <Breadcrumb title="Family Information" breadcrumbItem="Employee / Family Information" />
         <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={familyInformation}
            tableHeading="Family Information"
            isAddNewButton={true}
            customPageSize={10}
            route={'/employee/basic_information/AddEmployee'}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Family__Information;
