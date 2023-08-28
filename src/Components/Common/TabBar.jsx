import React,{ useEffect } from 'react';
import { Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSelector , useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { TabBarData } from '../../Data/Side_Bar_Data/Side__Bar__Data.js'; // Import the TabBarData array
import { selectButton } from '../../Features/Counter/CounterSlice.js'


export default function TabBar() {
  const [value, setValue] = React.useState(0);
  const selectedButtonId = useSelector((state) => state.counter.selectedButtonId);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedItem = TabBarData.find((item) => item.key === selectedButtonId);

  const handleTabClick = (route) => {
    navigate(route); // Use navigate to navigate to the route
  };




  const renderTabs = () => {
    if (selectedItem) {
      if (selectedItem.dropdownItems && selectedItem.dropdownItems.length > 0) {
        return (
          <Tabs value={value} onChange={handleChange}>
            {selectedItem.dropdownItems.map((dropdownItem) => (
              <Tab key={dropdownItem.key} label={dropdownItem.text} onClick={() => handleTabClick(dropdownItem.route)} />
            ))}
          </Tabs>
        );
      } else {
        return (
          <Tabs value={value} onChange={handleChange}>
            <Tab label={selectedItem.text} onClick={() => handleTabClick(selectedItem.route)} />
          </Tabs>
        );
      }
    } else {
      return null; // Render nothing if selectedButtonId doesn't match any SlideBarData item
    }
  };

  return (
    <Card sx={{ width: '100%', bgcolor: '#F9F8F7', borderRadius: "8px" }}>
      {renderTabs()}
    </Card>
  );
}
