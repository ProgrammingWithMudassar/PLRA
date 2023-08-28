import React from 'react';
import {
  Dialog, DialogContent, Paper, Table, Tooltip,
  TableContainer, TableHead, TableRow, TableCell, TableBody, Button, 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'




const Multi_Dropdown = ({ open, onClose, centers, onSelect, columns, newLink }) => {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} sx={{ width: "50%", m: 'auto' }}>
      <DialogContent>
        <Tooltip title="New">
          <Link to='/'><Button>add new</Button></Link>
        </Tooltip>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: theme.palette.primary.main }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} sx={{ color: theme.palette.common.white }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {centers.map((center) => (
                <TableRow key={center.c_rec_id} onClick={() => onSelect(center.center_name)}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{center[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
};

export default Multi_Dropdown;
