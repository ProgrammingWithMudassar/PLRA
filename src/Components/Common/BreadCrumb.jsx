import React from "react";
import PropTypes from 'prop-types';
import { Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Breadcrumb = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, mt: 2 }}>
      <Typography variant="" component="h4" sx={{  margin: 0, fontWeight: "blod" }}>
        {props.title}
      </Typography>
      <Box sx={{ marginLeft: 'auto' }}>
        <Breadcrumbs aria-label="breadcrumb">
          {/* <Link color="inherit" href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>{props.title}</Link> */}
          <Link
            color="inherit"
            href="#"
            aria-current="page"
            sx={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="body2" color="initial">
              {props.breadcrumbItem}
            </Typography>
          </Link>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
};

export default Breadcrumb;