// import * as React from "react";
// import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";
// import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";
// import { Button } from "@mui/material";
// // import Iconimg from "../../Assets/png/meat.jpg";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import { useTheme } from "@material-ui/core/styles";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const dummydata = [
//   {
//     title: "Your order is placed",
//     description: "Lorem ipsum, dolor is color awsome.",
//     time: "2 min ago",
//   },
//   {
//     title: "James Lemire",
//     description: "Lorem ipsum dolor sit amet consec to the awsome.",
//     time: "5 min ago",
//   },
//   {
//     title: "Your order is placed",
//     description: "Lorem ipsum dolor sit amet consec.",
//     time: "7 min ago",
//   },
//   {
//     title: "Good Morning",
//     description: "Lorem ipsum dolor sit amet consec.",
//     time: "7 min ago",
//   },
//   {
//     title: "Hello",
//     description: "Lorem ipsum dolor sit amet consec.",
//     time: "7 min ago",
//   },
// ];
// export default function Notification() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
//         <Tooltip title="Messages">
//           <IconButton
//             onClick={handleClick}
//             size="large"
//             aria-label="show 4 new mails"
//             color="inherit"
//           >
//             <Badge badgeContent={4} color="error">
//               <MailIcon />
//             </Badge>
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: "visible",
//             filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//             mt: 1.5,
//             width: "20rem",
//             "& .MuiAvatar-root": {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             "&:before": {
//               content: '""',
//               display: "block",
//               position: "absolute",
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: "background.paper",
//               transform: "translateY(-50%) rotate(45deg)",
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: "right", vertical: "top" }}
//         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             padding: "0 1.5rem",
//             alignItems: "center",
//           }}
//         >
//           <Typography
//             variant="body2"
//             sx={{ color: theme.palette.common.black }}
//           >
//             Notifications{" "}
//           </Typography>
//           <Button
//             style={{
//               marginLeft: "3rem",
//               fontSize: "0.78rem",
//               fontWeight: "500",
//               backgroundColor: "transparent",
//               "&:hover": {
//                 backgroundColor: "rgba(0, 0, 0, 0.1)", // Transparent black background on hover
//               },
//             }}
//           >
//             View All
//           </Button>
//         </div>
//         <Divider />
//         {dummydata.map((item, index) => (
//           <MenuItem key={index} onClick={handleClose} style={{borderBottom: '1px solid #E5E5E5'}}>
//             <Avatar>{item.title.charAt(0)}</Avatar>
//             <div style={{ paddingLeft: "0.8rem", paddingTop: "0.6rem", fontSize: '0.7rem' }}>
//               <Typography variant="body1" style={{fontSize: '0.8rem', height: '1rem'}}>{item.title}</Typography>
//               {item.description.length > 32
//                 ? `${item.description.substring(0, 28)}...`
//                 : item.description}
//               <Typography
//                 variant="body2"
//                 style={{ alignItems: "center", display: "flex" }}
//               >
//                 <AccessTimeIcon style={{ fontSize: "0.8rem" }} />
//                 <Typography
//                   variant="body2"
//                   style={{ paddingLeft: "0.2rem", fontSize: "0.7rem" }}
//                 >
//                   {item.time}
//                 </Typography>
//               </Typography>
//             </div>

//           </MenuItem>
//         ))}
//         <Divider />
//         <Button
//           style={{
//             marginLeft: "8rem",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "0.78rem",
//             fontWeight: "500",
//             backgroundColor: "transparent",
//             "&:hover": {
//               backgroundColor: "rgba(0, 0, 0, 0.1)", // Transparent black background on hover
//             },
//           }}
//         >
//           View All <ArrowForwardIcon style={{ fontSize: "1rem" }} />
//         </Button>
//       </Menu>
//     </React.Fragment>
//   );
// }