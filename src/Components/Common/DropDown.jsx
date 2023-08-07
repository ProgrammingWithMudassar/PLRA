import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import '../Styles.css'

const DropDown = ({ activeDropdownOnHover, dropdownItems }) => {
  return (
    <div>
        <ul className='dropdownList'>
          {dropdownItems.map((dropdownItem) => (
            <Link to={dropdownItem.route} key={dropdownItem.key}>
              <li>
                <Typography variant="body2" color="initial">{dropdownItem.text}</Typography>
              </li>
            </Link>
          ))}
        </ul>
    </div>
  );
};

export default DropDown;