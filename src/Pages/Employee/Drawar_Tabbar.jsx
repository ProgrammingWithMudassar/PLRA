import * as React from 'react';
import { Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Employee_DropDown } from '../../Data/Side_Bar_Data/Side__Bar__Data.js';

export default function Drawar_Tabbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', borderRadius: '8px', marginLeft: '25px' }}>
      <Tabs value={value} onChange={handleChange}>
        {Employee_DropDown.map((item) => (
          <Tab key={item.key} label={item.text} />
        ))}
      </Tabs>
      <Divider variant="fullWidth" orientation="horizontal" />
    </Box>
  );
}