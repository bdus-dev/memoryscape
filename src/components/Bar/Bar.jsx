import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuSharp from '@material-ui/icons/MenuSharp';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { Menu, MenuItem, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
  popoverPaper: {
    width: '100%',
    height: '100%',
    maxHeight: 'unset',
    maxWidth: 'unset',
    top: '0 !important',
    backgroundColor: '#000000bf',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: '0 !important',
    [theme.breakpoints.down(800)]: {
      textAlign: 'center',
    },
  },
  menuContent: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down(800)]: {
      flexDirection: 'column',
    },
    justifyContent: 'center',
    position: 'initial',
    '& div': {
      marginRight: '3em',
      [theme.breakpoints.down(800)]: {
        margin: 'auto',
      },
    },
  },
  menuItem: {
    color: '#fff',
    fontSize: '3.4em',
    fontWeight: '500',
    '&:hover': {
      color: '#7a1dcf',
    },
  },
  colorWhite: {
    color: '#fff',
  },
  contactParagraph: {
    color: '#7b7878',
    fontSize: '1em',
    lineHeight: '1.8em',
  },
  titleMenu: {
    letterSpacing: '0.1em',
  },
  menuLink: {
    textDecoration: 'none',
    display: 'block',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  closeMenuContainer: {
    position: 'absolute',
    marginRight: '0.8em !important',
    top: '0',
    right: '0',
    '& button': {
      color: '#fff',
      fontSize: '2.5rem',
    },
  },
}));

export default function Bar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="primary" position="fixed" className={classes.appBar}>
      <Toolbar variant="regular" className={classes.mainToolBar}>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuIconClick}>
          <MenuSharp className={classes.iconMenu} />
        </IconButton>
        <Menu
          PopoverClasses={{ paper: classes.popoverPaper }}
          classes={{ list: classes.menuContent }}
          id="main-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          keepMounted
        >
          <div className={classes.closeMenuContainer}>
            <IconButton onClick={handleClose}>
              <CloseIcon className={classes.iconMenu}/>
            </IconButton>
          </div>
          <div>
            <Link href="/" className={classes.menuLink}>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Home</MenuItem>
            </Link>
            <Link href="/mappa/" className={classes.menuLink}>
              <MenuItem className={classes.menuItem}>Mappa</MenuItem>
            </Link>
          </div>
          <div>
            <Link href="/search/" className={classes.menuLink}>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Archivio</MenuItem>
            </Link>
            <Link href="/about/" className={classes.menuLink}>
              <MenuItem className={classes.menuItem}>About</MenuItem>
            </Link>
          </div>
          <div className={classes.colorWhite}>
            <h5 className={classes.titleMenu}>HOME MOVIES DIGITAL ARCHIVE</h5>
            <p className={classes.contactParagraph}>
              Home Movies
              <br />
              Via Sant’Isaia, 18 - 40123 Bologna, IT
              <br />
              Call - (+39) 051 3397243
              <br />
              Email -
              <span className={classes.colorWhite}>info@homemovies.it</span>
            </p>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
