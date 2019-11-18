import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Button, Dialog, AppBar, Toolbar, IconButton, Slide } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { FormattedHTMLMessage } from 'react-intl';

const useStyles = makeStyles(() => ({
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
}));

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function FilterModal() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" className={classes.filterBtn} onClick={handleClickOpen}>
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
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon className={classes.iconMenu} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}
