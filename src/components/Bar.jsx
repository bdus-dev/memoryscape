import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';

export default function Bar() {
  const handleSettingsClick = () => {
    console.log('settings clicked');
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar variant="regular">
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Menu>
          <MenuItem
            onClick={handleSettingsClick}
          >
            Settings
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
