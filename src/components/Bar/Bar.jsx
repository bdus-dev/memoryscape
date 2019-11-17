import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuSharp from '@material-ui/icons/MenuSharp';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  mainToolBar: {
    flexDirection: 'row-reverse',
  },
  iconMenu: {
    fontSize: '2.5rem',
  },
}));

export default function Bar() {
  const classes = useStyles();
  const handleSettingsClick = () => {
    console.log('settings clicked');
  };

  return (
    <AppBar color="primary" position="fixed" className={classes.appBar}>
      <Toolbar variant="regular" className={classes.mainToolBar}>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleSettingsClick}>
          <MenuSharp className={classes.iconMenu} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}