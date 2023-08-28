import React from "react";
import "../../Styles.css";
import { Typography, Box, Container } from "@mui/material";


const Contact__Information = () => {
  return (
    <>
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
