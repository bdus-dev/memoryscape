import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { Button, Dialog, AppBar, Toolbar, IconButton, Slide, DialogContent, Grid, Paper } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { FormattedMessage } from 'react-intl';
import ThemesList from './Filters/ThemesList';
import FilterContext from './FilterContext';

import {col} from '../../cfg';

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    '& .MuiDialog-paperFullScreen': {
      backgroundColor: '#000000f2',
    },
  },
  filterBtn: {
    backgroundColor: '#fff',
    padding: '.4em 2em',
    fontSize: '1em',
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
    '& h2': {
      fontSize: '3.2em',
      marginBottom: '0.2em',
      marginTop: '0',
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
    backgroundColor: col,
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
  const { getQueryFilters } = useContext(FilterContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const applyFilters = () => {
    history.push(getQueryFilters());
    handleClose();
  };

  return (
    <div>
      <Button
        color="primary"
        className={classes.filterBtn}
        onClick={handleClickOpen}
      >
        <FormattedMessage id="app.themes" />
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
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon className={classes.iconMenu} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ThemesList applyFilter={applyFilters} />
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
