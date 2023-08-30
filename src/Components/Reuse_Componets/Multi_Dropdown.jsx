import React, { useState } from 'react';
import {
  Dialog, DialogContent, Paper, Table,
  TableContainer, TableHead, TableRow, TableCell, TableBody,
  TextField, Box, Button,
  IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Close as CloseIcon } from '@mui/icons-material';

const Multi_Dropdown = ({ open, onClose, centers, columns, onSelect }) => {
  const handleRowClick = (params) => {
    if (onSelect) {
      onSelect(params.row);
    }
    onClose();
  };

  const rowHeight = 25;
  return (
    <Dialog open={open} onClose={onClose} sx={{ width: 'fit-content', m: 'auto' }}>

      <DialogContent  >
        <DataGrid sx={{ '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': { outline: 'none' }, fontSize: '14px' }}
          rows={centers}
          columns={columns}
          getRowHeight={() => rowHeight}
          disableRowSelectionOnClick={true}
          columnHeaderHeight={30}
          pageSizeOptions={[10, 20, 30]}
          onRowClick={handleRowClick}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Multi_Dropdown;