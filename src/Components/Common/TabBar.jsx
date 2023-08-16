import * as React from 'react';
import {Card}from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ width: '100%', bgcolor: 'background.paper',borderRadius:"8px" }}>
      <Tabs value={value} onChange={handleChange} >
        <Tab label="Dashboard" />
        <Tab label="Employee" />
        <Tab label="Leaves" />
        <Tab label="Branches" />
        <Tab label="Pools" />
      </Tabs>
    </Card>
  );
}