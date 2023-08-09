import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Toolbar, IconButton, Avatar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { SlideBarData } from '../Data/Side_Bar_Data/Side__Bar__Data.js';
import { Sidebar_header } from '../Data/Side_Bar_Data/Side__Bar__Data.js';
import Handling__Route from '../Routes/Handle_Route/Handling__Route.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faAngleUp, faAngleDown } from '../Assets/Icons/Icons.js';
import DropDown from '../Components/Common/DropDown.jsx';
import "./Style.css"



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: '#9DFFB5', // Apply the background color directly to the Drawer component
    ...(open && { ...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme) }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleDropdownClick = (index) => {
    setActiveDropdown((prevState) => (prevState === index ? null : index));
  };
  const SideabarController = () => {
    setOpen(!open);
    setActiveDropdown(null)
  }
  const nestedBar = () => {
    setActiveDropdown(null)
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ backgroundColor: theme.palette.common.white, boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.1)" }}>
        <Toolbar sx={{ display: 'flex' }}>
          {/* <Typography variant="h6" sx={{ width: '18%', color: theme.palette.common.black }}>PLRA</Typography> */}
          <IconButton onClick={SideabarController}>
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Box sx={{ ml: 1, p: 1, display: 'flex', width: '30%', justifyContent: "center", alignItems: 'center' }}>
            <img src={Sidebar_header.Logo_Image} alt="" style={{ width: '60px' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1.5 }}>
              <Typography variant="body1" fontWeight={600} color="initial">Registration of Deeds - ROD</Typography>
              <Typography variant="body2" color="initial">Board of Revenue, Punjab</Typography>
            </Box>
          </Box>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", pr: 2 }}>
            <Typography variant="body1" sx={{ color: theme.palette.common.black }}></Typography>
            <Box sx={{
              color: theme.palette.primary.main,
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', gap: 3
            }}>
              <FontAwesomeIcon icon={Sidebar_header.messageIcon} style={{ fontSize: "20px", cursor: 'pointer' }} />
              <FontAwesomeIcon icon={Sidebar_header.settingIcon} style={{ fontSize: "20px", cursor: 'pointer' }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar alt="" src={Sidebar_header.avatar} sx={{ cursor: 'pointer', borderRadius: "10px" }} />
                <FontAwesomeIcon icon={Sidebar_header.avatarDown} style={{ fontSize: "20px", cursor: 'pointer' }} />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader />
        <Divider />
        <Box className="sidebar custom-scrollbar">
          <Box mt={0}>
            <ul className='sidebar__list'>
              {SlideBarData.map((data, index) => (
                <li key={data.key} style={{ cursor: 'pointer', with: "100%", }} className={open ? "open_sidebar" : "close_sidebar"}>
                  {data.dropdownItems ? (
                    <div onClick={() => handleDropdownClick(index)} className='sidebar__li'>
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}>
                        <FontAwesomeIcon icon={data.icon} style={{ color: "#3bd862", width: '25px' }} />
                        {open && <>
                          <span style={{ marginLeft: "0.7rem" }}>
                            <Typography variant="body2" >{data.text}</Typography>
                          </span>
                          {activeDropdown === index ? (
                            <FontAwesomeIcon icon={faAngleUp} style={{ marginLeft: "auto", color: "#D0D0D0" }} />
                          ) : (
                            <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: "auto", color: "#D0D0D0" }} />
                          )}
                        </>}
                      </Box>
                      {activeDropdown === index && (
                        <ul className='dropdownList'>
                          {data.dropdownItems.map((dropdownItem) => (
                            <Link to={`/${dropdownItem.route}`} key={dropdownItem.key}>
                              <li onClick={nestedBar}>
                                <Typography variant="body2"  align='left'
                                  sx={{
                                    '&:hover': {
                                      color: theme.palette.primary.dark
                                    },
                                  }}>{dropdownItem.text}</Typography>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to={`/${data.route}`} style={{ width: '100%' }}>
                      <Box className={open ? "open_sidebar sidebar__li" : "close_sidebar sidebar__li"} >
                        <FontAwesomeIcon icon={data.icon} style={{ color: "#3bd862", width: "25px" }} />
                        {
                          open && <span style={{ marginLeft: "0.7rem" }}>
                            <Typography variant="body2" sx={{ color: theme.palette.common.black }}>{data.text}</Typography>
                          </span>
                        }
                      </Box>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Drawer>
      <Box className="App" sx={{ height:"auto", flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Handling__Route />
      </Box>
    </Box>
  );
};
export default Sidebar;