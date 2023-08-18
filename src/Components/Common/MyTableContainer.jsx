import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import '../Styles.css'
import { Link } from 'react-router-dom';



const rowHeight = 40;

export default function MyTableContainer(props) {

  const { columns, data, customPageSize, tableHeading, isAddNewButton, route } = props
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" component="h4" sx={{ fontSize: '1.125rem', margin: 0, fontWeight: "blod" }}>{tableHeading}</Typography>
        {
          isAddNewButton ?
            <Link to={`${route}`}>
              <Button variant='contained' sx={{ display: 'flex', alignItems: 'center' }}><span>
                <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: "0.9rem", marginRight: "6px", paddingTop: "5px" }} /></span>Add New
              </Button>
            </Link>
            :
            <></>
        }
      </Box>
      <Box style={{ height: '510px', width: 'auto' }}>
        <DataGrid sx={{ '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': { outline: 'none' }, fontSize: '14px' }}
          rows={data}
          columns={columns}
          getRowHeight={() => rowHeight} // Set the row height
          disableRowSelectionOnClick={true}
          columnHeaderHeight={40}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: customPageSize } } }}
          pageSizeOptions={[10, 20, 30]}
          checkboxSelection
        />
      </Box>
    </div>

  );
}