import React from "react";
import "../../Styles.css";
import { Typography, Box, Container,Card,CardContent } from "@mui/material";
import {personalDocument } from "../../../Data/Dummy_Data/Dummy__Data";

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
  {   field: 'document_type',
  headerName: 'Document Type',
  type: 'string',
  width: 150,renderCell: renderNullInRed },
  {
    field: 'document_name',
    headerName: 'Document Name',
    type: 'string',
    width: 180, renderCell: renderNullInRed,
    valueGetter: (params) => `${params.row.document_name|| ""}`,
  },

  {
    field: 'issuance_authority',
    headerName: 'Issuance Authority',
    type: 'string',
    width: 180, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.issuance_authority || "",
  },
  {
    field: 'effective_date',
    headerName: 'Effective Date',
    type: 'string',
    width: 150,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.effective_date || "",
  },
  {
    field: 'expiration_date',
    headerName: 'Expiration Date',
    type: 'string',
    width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.expiration_date|| "",
  },
  {
    field: 'renewal_require',
    headerName: 'Renewal Required',
    type: 'string',
    width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.renewal_require || "",
  },
  {
    field: 'renewal_date',
    headerName: 'Renewal Date',
    type: 'string',
    width: 150, renderCell: renderNullInRed,
    valueGetter: (params) => params.row.renewal_date || "",
  },
  {
   field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 130,  valueGetter: (params) => params.row.verified || "",
  },
  {
    field: 'attachment',
    headerName: 'Attachment',
    type: 'string',
    width: 200,renderCell: renderNullInRed,
    valueGetter: (params) => params.row.attachment|| "",},

];
const Personal__Document = () => {
 return (
    <>
 <Breadcrumb title="Personal Document" breadcrumbItem="Employee / Personal Document" />
         <Card sx={{ width: '100%', overflowX: 'scroll' }}>
        <CardContent >
          <MyTableContainer
            columns={columns}
            data={personalDocument}
            tableHeading="Personal Document"
            isAddNewButton={true}
            customPageSize={10}
            route={'/employee/basic_information/AddEmployee'}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default Personal__Document
