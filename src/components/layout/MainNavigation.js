import { Link } from 'react-router-dom';

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

export default function MainNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Link to='/'>
        <Button >
            <h1 >Business Analysis Basics</h1>
        </Button>
    </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/materials'>Materials</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/techniques'>Techniques</Link></MenuItem>
      </Menu>
    </div>
  );
}

