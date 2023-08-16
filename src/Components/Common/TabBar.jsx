import * as React from 'react';
import { Box, Button } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Divider from '@mui/material/Divider'

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <ul className='tabbar'>
                <li>
                    <Button sx={{ backgroundColor: 'transparent' }}>First</Button>

                </li>
                <li>asfas</li>
                <li>asfas</li>
                <li>asfas</li>
            </ul>
            <Divider variant="fullWidth" orientation="horizontal" />
        </Box>
    );
}
