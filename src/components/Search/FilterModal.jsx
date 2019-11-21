import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import _ from 'lodash';

import { Button, Dialog, AppBar, Toolbar, IconButton, Slide, DialogActions, DialogContent, Grid, Paper, Fab } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { FormattedHTMLMessage } from 'react-intl';
import Database from '../../services/Database';

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    '& .MuiDialog-paperFullScreen': {
      backgroundColor: '#000000bf',
    },
  },
  filterBtn: {
    backgroundColor: '#fff',
    padding: '.4em 2.3em',
    fontSize: '1.1em',
    borderRadius: '2px',
    color: '#000',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  appBar: {
    position: 'relative',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  iconMenu: {
    fontSize: '2.5rem',
  },
  dialogContent: {
    marginLeft: '24em',
    [theme.breakpoints.down(960)]: {
      marginLeft: '9em',
    },
    marginRight: '9em',
    '& h2': {
      fontSize: '3.2em',
    },
  },
  paper: {
    backgroundColor: 'transparent',
    color: '#fff',
    textAlign: 'left',
    [theme.breakpoints.down(960)]: {
      textAlign: 'center',
    },
  },
  fabTheme: {
    borderRadius: '0 !important',
    padding: '0.5em',
    margin: '0.2em',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#7a1dcf',
      color: '#fff',
    },
  },
  footerContainer: {
    padding: '0',
  },
  clearIcon: {
    fontSize: '2.3rem',
    marginRight: '0.2em',
  },
  clearBtn: {
    color: '#989898',
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  applyBtn: {
    backgroundColor: '#7a1dcf',
    color: '#fff',
    padding: '0.4em 3em',
    fontSize: '1.6em',
    borderRadius: '0',
    '&:hover': {
      backgroundColor: '#530e92',
    }
  },
}));

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function FilterModal() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [themes, setThemes] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    Database.getUniqueVal('luogo', (result) => {
      console.log(result);
    });

    Database.getVocabulary('temi-ms', (result) => {
      setThemes(result);
    });
  }, []);

  const selectTheme = (event) => {
    console.log(event);
  };

  return (
    <div>
      <Button
        color='primary'
        className={classes.filterBtn}
        onClick={handleClickOpen}
      >
        <FormattedHTMLMessage id="app.search.filters" />
      </Button>
      <Dialog
        className={classes.dialogContainer}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon className={classes.iconMenu} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={4}>
              <Paper className={classes.paper}>
                <h2>
                  <FormattedHTMLMessage id="app.filterModal.year" />
                </h2>
              </Paper>
            </Grid>
            <Grid item sm={12} md={8}>
              <Paper className={classes.paper}>
                <h2>
                  <FormattedHTMLMessage id="app.filterModal.places" />
                </h2>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>
                  <FormattedHTMLMessage id="app.filterModal.themes" />
                </h2>
                {themes && themes.map((e, i) => {
                  return (
                    <Fab className={classes.fabTheme} key={i} variant="extended" size="small" onClick={selectTheme}>
                      {e.trim()}
                    </Fab>
                  );
                })}
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.footerContainer}>
          <Button onClick={handleClose} className={classes.clearBtn}>
            <CloseIcon className={classes.clearIcon} />
            <FormattedHTMLMessage id="app.filterModal.clear" />
          </Button>
          <Button className={classes.applyBtn} onClick={handleClose} autoFocus>
            <FormattedHTMLMessage id="app.filterModal.apply" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
