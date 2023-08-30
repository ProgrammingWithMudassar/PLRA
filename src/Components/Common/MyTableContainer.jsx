import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import '../Styles.css'
import { Button, Typography, Card } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { faPlus } from '../../Assets/Icons/Icons';


const rowHeight = 25;

export default function MyTableContainer(props) {

  const { columns, data, customPageSize, tableHeading, isAddNewButton, route } = props
  return (
    <Box sx={{ width: '100%', overflowX: 'scroll', borderRadius: "6px", height: '71.3vhvh', overflow: 'hidden' }}>
      <Box style={{ height: '71.3vh', width: 'auto' }}>
        <DataGrid sx={{ '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': { outline: 'none' }, fontSize: '14px' }}
          rows={data}
          columns={columns}
          getRowHeight={() => rowHeight}
          disableRowSelectionOnClick={true}
          columnHeaderHeight={30}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: customPageSize } } }}
          pageSizeOptions={[10, 20, 30]}
        />
      </Box>
    </Box>

  );
}