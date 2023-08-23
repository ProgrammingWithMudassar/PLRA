import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Button, Typography, Card } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import '../Styles.css'
import { Link } from 'react-router-dom';
import { faPlus } from '../../Assets/Icons/Icons';


const rowHeight = 25;

export default function MyTableContainer(props) {

  const { columns, data, customPageSize, tableHeading, isAddNewButton, route } = props
  return (
    <Box sx={{ width: '100%', overflowX: 'scroll',borderRadius: "6px", height: '70vh', overflow: 'hidden' }}>
      {/* <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" component="h4" sx={{ fontSize: '1.125rem', margin: 0, fontWeight: "blod" }}>{tableHeading}</Typography>
        {
          isAddNewButton ?
            <Link to={`${route}`}>
              <Button sx={{ width: '15px', height: '2rem', borderRadius: '10rem' }}>
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.4rem' }} />
              </Button>
            </Link>
            :
            <></>
        }
      </Box> */}

      <Box style={{ height: '70vh', width: 'auto' }}>
        <DataGrid sx={{ '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': { outline: 'none' }, fontSize: '14px' }}
          rows={data}
          columns={columns}
          getRowHeight={() => rowHeight}
          disableRowSelectionOnClick={true}
          columnHeaderHeight={30}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: customPageSize } } }}
          pageSizeOptions={[10, 20, 30]}
        // checkboxSelection
        />
      </Box>
    </Box>

  );
}