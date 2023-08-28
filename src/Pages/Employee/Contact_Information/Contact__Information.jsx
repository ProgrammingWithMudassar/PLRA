import React from "react";
import "../../Styles.css";
import { Typography, Box, Container } from "@mui/material";
import { TabBar } from '../../../Components/index'


const Contact__Information = () => {
  return (
    <>
    <TabBar />
      <Box className="sectionTitle">
        <Typography variant="h5" color="initial">
          Contact Information
        </Typography>
      </Box>
      <Container maxWidth="lg"></Container>
    </>
  );
};

export default Contact__Information;
