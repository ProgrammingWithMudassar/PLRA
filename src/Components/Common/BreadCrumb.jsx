import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { faPlus, faPenToSquare, faTrash, faFloppyDisk } from "../../Assets/Icons/Icons";
import Tooltip from "@mui/material/Tooltip";

const Breadcrumb = (props) => {
  const theme = useTheme();

  const buttonIcons = {
    New: <FontAwesomeIcon icon={faPlus} />,
    edit: <FontAwesomeIcon icon={faPenToSquare} />,
    delete: <FontAwesomeIcon icon={faTrash} />,
    save: <FontAwesomeIcon icon={faFloppyDisk} />,
  };

  return (
    <Box
      sx={{
        marginLeft: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1,
        mt: 1,
        pl: 0.3
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" component="h4" sx={{ margin: 0, fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <Link underline="hover" to="/">
          <Typography variant="body2" sx={{ mt: "-3px" }}>
            {props.breadcrumbItem}
          </Typography>
        </Link>
      </Box>
      <div style={{ justifyContent: "flex-end", display: "flex", padding: "0" }}>
        {props.buttons.map((buttonType, index) => (
          <Link
            key={index}
            component={Button}
            to={props.routes[buttonType] || "#"}
            sx={{ fontSize: "1.4rem", height: "2rem", borderRadius: "20rem", marginRight: "8px" }} >
            <Tooltip title={buttonType} placement="top">
              <Button>
                {buttonIcons[buttonType]}
              </Button>
            </Tooltip>
          </Link>
        ))}
      </div>
    </Box>
  );
};

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.oneOf(["New", "edit", "delete", "save"])),
  routes: PropTypes.objectOf(PropTypes.string),
};

export default Breadcrumb;
