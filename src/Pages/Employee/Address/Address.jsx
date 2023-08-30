import React from "react";
import "../../Styles.css";
import { Typography, Box, Container,Card,CardContent } from "@mui/material";
import { address} from "../../../Data/Dummy_Data/Dummy__Data";
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
    field: "employee", headerName: "Employee Id", type: "number", width:110, 
    align:'left',headerAlign:'left',renderCell: renderNullInRed,
    valueGetter: (params) => `${params.row.employee || ""}`,
  },
  
  {
    field: "name", headerName: "Name", type: "string", width:150, renderCell: renderNullInRed,
    valueGetter: (params) => `${params.row.name || ""}`,
  },
  {
    field: "address", headerName: "Address", type: "string", width: 230, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.address || "",
  },
  {
    field: "purpose", headerName: "Purpose", type: "string", width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.purpose || "",
  },
  {
    field: "is_primary", headerName: "Is_Primary", type: "string", width: 110, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.is_primary || "",
  },
  {
    field: "district", headerName: "District", type: "string", width: 130, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.district || "",
  },
  {
    field: "tehsil", headerName: "Tehsil", type: "string", width: 110,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.tehsil || "",
  },
  {
    field: "city", headerName: "City", type: "string", width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.city || "",
  },

];

const Address = () => {
  return (
    <>
     <Breadcrumb
        title="Addresses"
        breadcrumbItem="Employee /Addresses"
        buttons={["New"]}
        routes={{
          plus: "/employee/personal_information",
        }}
      />
      <MyTableContainer
        columns={columns}
        data={address}
        tableHeading="Addresses"
        isAddNewButton={true}
        customPageSize={17}
        route={'/employee/basic_information/AddEmployee'}
      />
    </>
  );
};

export default Address;