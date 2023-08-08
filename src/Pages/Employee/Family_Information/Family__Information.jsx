import React from "react";
import "../../Styles.css";
import { Typography, Box, Container } from "@mui/material";

const Family__Information = () => {
  return (
    <>
      <Box className="sectionTitle">
        <Typography variant="h5" color="initial">
          Family Information
        </Typography>
      </Box>
      <Container maxWidth="lg"></Container>
    </>
  );
};

export default Family__Information;
