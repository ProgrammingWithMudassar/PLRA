import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from '@mui/material'
import '../Styles.css'

const renderNullInRed = (params) => {
  const value = params.value;
  if (value === null) {
    return <span style={{ color: 'red' }}>Null</span>;
  }
  return value;
};

const columns = [
  { field: 'id', headerName: 'ID', width: 150, renderCell: renderNullInRed },
  { field: 'firstName', headerName: 'First name', width: 200, renderCell: renderNullInRed },
  { field: 'lastName', headerName: 'Last name', width: 200, renderCell: renderNullInRed },
  { field: 'age', headerName: 'Age', type: 'number', width: 120, renderCell: renderNullInRed },
  {
    field: 'Action',
    headerName: 'Action',
    type: 'string',
    width: 220,
    renderCell: (params) => {
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => setAnchorEl(null);
      const onEdit = () => handleClose();
      const onDelete = () => handleClose();
      const onView = () => handleClose();

      return (
        <div style={{ width: '100%' }}>
          <Button onClick={handleClick} size="small" variant='contained' aria-controls={open ? 'dropdown-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} sx={{ py: 0,px:2 }}>Action</Button>
          <Menu
            anchorEl={anchorEl}
            id="dropdown-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible', mt: 1.5,
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                '&:before': {
                  content: '""', display: 'block',
                  position: 'absolute', top: 0, right: 14, width: 10, zIndex: 0,
                  height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)',
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={onView}><ListItemIcon> <VisibilityIcon fontSize="small" sx={{color:'red'}} /> </ListItemIcon> View </MenuItem>
            <MenuItem onClick={onEdit}><ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>Edit</MenuItem>
            <MenuItem onClick={onDelete}><ListItemIcon><DeleteIcon fontSize="small" /></ListItemIcon>Delete</MenuItem>
          </Menu>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Doe', firstName: 'John', age: 28 },
  { id: 13, lastName: 'Smith', firstName: 'Jane', age: 30 },
  { id: 14, lastName: 'Johnson', firstName: 'Michael', age: 50 },
  { id: 15, lastName: 'Williams', firstName: 'Emily', age: 22 },
  { id: 16, lastName: 'Brown', firstName: 'Jessica', age: 27 },
  { id: 17, lastName: 'Jones', firstName: 'William', age: 35 },
  { id: 18, lastName: 'Davis', firstName: 'Sarah', age: 40 },
  { id: 19, lastName: 'Miller', firstName: 'David', age: 29 },
  { id: 20, lastName: 'Wilson', firstName: 'Olivia', age: 32 },
  { id: 21, lastName: 'Moore', firstName: 'Sophia', age: 25 },
  { id: 22, lastName: 'Anderson', firstName: 'Emma', age: 31 },
  { id: 23, lastName: 'Taylor', firstName: 'Liam', age: 28 },
  { id: 24, lastName: 'Thomas', firstName: 'Noah', age: 24 },
  { id: 25, lastName: 'Jackson', firstName: 'Ava', age: 26 },
  { id: 26, lastName: 'White', firstName: 'James', age: 38 },
  { id: 27, lastName: 'Harris', firstName: 'Ella', age: 21 },
  { id: 28, lastName: 'Martin', firstName: 'Logan', age: 29 },
  { id: 29, lastName: 'Thompson', firstName: 'Mia', age: 33 },
  { id: 30, lastName: 'Garcia', firstName: 'Benjamin', age: 36 },
  { id: 31, lastName: 'Martinez', firstName: 'Grace', age: 31 },
];

const rowHeight = 40;
const headerHeight = 50;

export default function MyTableContainer() {
  return (
    <div style={{ height: '510px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowHeight={() => rowHeight} // Set the row height
        headerHeight={() => headerHeight}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
        pageSizeOptions={[10, 20, 30]}
        checkboxSelection
      />
    </div>
  );
}