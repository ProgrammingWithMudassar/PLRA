import React, { useState } from 'react';
import {
  Dialog, DialogContent, Paper, Table,
  TableContainer, TableHead, TableRow, TableCell, TableBody,
  TextField, Box, Button // Import Button component
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Multi_Dropdown = ({ open, onClose, centers, onSelect }) => {
  const theme = useTheme();
  const [addCenterDialogOpen, setAddCenterDialogOpen] = useState(false); // State for the add center dialog

  const handleAddCenterClick = () => {
    setAddCenterDialogOpen(true);
  };

  const handleAddCenterClose = () => {
    setAddCenterDialogOpen(false);
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ width: "50%", m: 'auto' }}>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: theme.palette.primary.main }}>
              <TableRow >
                <TableCell sx={{ color: theme.palette.common.white }}>Center Name</TableCell>
                <TableCell sx={{ color: theme.palette.common.white }}>Region</TableCell>
                <TableCell sx={{ color: theme.palette.common.white }}>District</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {centers.map((center) => (
                <TableRow
                  key={center.c_rec_id}
                  onClick={() => onSelect(center.center_name)}
                >
                  <TableCell>{center.center_name}</TableCell>
                  <TableCell>{center.region}</TableCell>
                  <TableCell>{center.district}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>

      {/* Button to open the add center dialog */}
      <Button onClick={handleAddCenterClick}>Add Center</Button>

      {/* Dialog for adding a new center */}
      <Dialog open={addCenterDialogOpen} onClose={handleAddCenterClose}>
        <DialogContent>
          <label htmlFor="tehsil">Tehsil:</label>
          <TextField id="tehsil" />
          <label htmlFor="centerName">Center Name:</label>
          <TextField id="centerName" />
          <label htmlFor="region">Region:</label>
          <TextField id="region" />
          <label htmlFor="district">District:</label>
          <TextField id="district" />
        </DialogContent>
      </Dialog>

    </Dialog>
  );
};

export default Multi_Dropdown;
