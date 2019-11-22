import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InternalTmpl from '../Templates/InternalTmpl';

import Record from './Record';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textBox: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: '1em',
  }
}));

export default function Clip(props) {
  const classes = useStyles();

  const clipId = props.match.params.id;
  const lang = props.match.params.lang;

  return (
    <InternalTmpl lang={lang}>
      <Typography className={classes.boxContainer} component="div">
        <Box className={classes.textBox}>
          <h5>HOME MOVIES DIGITAL ARCHIVE | Viaggio in Italia</h5>
        </Box>
      </Typography>

      <Record id={clipId} />
    </InternalTmpl>
  );
}
