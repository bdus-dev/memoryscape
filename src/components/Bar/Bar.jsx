import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';


import MenuSharp from '@material-ui/icons/MenuSharp';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { Menu, MenuItem } from '@material-ui/core';
import { FormattedHTMLMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  fabButton: {
    position: 'absolute',
    right:'1rem',
    top:'1rem',
    background: 'transparent',
    color: '#fff',
    '&:hover': {
      background: '#7D43CF !important',
      color: '#fff',
    }
  },
  iconMenu: {
    fontSize: '2.5rem',
  },
  popoverPaper: {
    width: '100%',
    height: '100vh',
    maxHeight: '100vh',
    maxWidth: 'unset',
    top: '0 !important',
    backgroundColor: '#000000f2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: '0 !important',
    [theme.breakpoints.down(800)]: {
      textAlign: 'center',
    },
  },
  menuContent: {
    maxHeight: '100vh',
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
    fontWeight: '700',
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

export default function Bar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const lang = props.lang;

  const handleMenuIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const gotoPage = (page) => {
    history.push(page);
  };

  return (
    <AppBar color="primary" position="fixed" className={classes.appBar}>
      <Fab onClick={handleMenuIconClick} className={classes.fabButton}>
        <MenuSharp className={classes.iconMenu} />
      </Fab>

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
            <CloseIcon className={classes.iconMenu} />
          </IconButton>
        </div>
        <div>
          <MenuItem onClick={() => gotoPage('/')} className={classes.menuItem}>Home</MenuItem>
          <MenuItem onClick={() => gotoPage(`/${lang}/map`)} className={classes.menuItem}>
            <FormattedHTMLMessage id="app.menu.map" />
          </MenuItem>
        </div>
        <div>
          <MenuItem onClick={() => gotoPage(`/${lang}/search/`)} className={classes.menuItem}>
            <FormattedHTMLMessage id="app.menu.archive" />
          </MenuItem>
          <MenuItem onClick={() => gotoPage(`/${lang}/about`)} className={classes.menuItem}>
            <FormattedHTMLMessage id="app.menu.about" />
          </MenuItem>
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
    </AppBar>
  );
}
