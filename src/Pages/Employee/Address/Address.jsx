import React from "react";
import "../../Styles.css";
import { Typography, Box, Container } from "@mui/material";

const Address = () => {
  return (
    <>
      <Box className="sectionTitle">
        <Typography variant="h5" color="initial">
          Address
        </Typography>
      </Box>
      <Container maxWidth="lg"></Container>
    </>
  );
};

export default Address;