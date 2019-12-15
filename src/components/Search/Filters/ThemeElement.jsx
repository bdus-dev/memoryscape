import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FilterContext from '../FilterContext';

const useStyles = makeStyles(() => ({
  fabTheme: {
    borderRadius: '0 !important',
    padding: '0.5em',
    margin: '0.2em',
    fontSize: '0.7rem',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#7a1dcf',
      color: '#fff',
    },
  },
  selected: {
    backgroundColor: '#7a1dcf',
    color: '#fff',
    '&:hover': {
      // backgroundColor: '#e0e0e0',
      // color: '#000',
    },
  },
}));

export default function ThemeElement(props) {
  const { toggleThemes } = useContext(FilterContext);
  const { themeValue, selected, applyFilter } = props;
  const [fabSelected, setFabSelected] = useState(selected);
  const classes = useStyles();

  const selectValue = () => {
    setFabSelected((!fabSelected));
    toggleThemes(themeValue);
    applyFilter();
  };

  return (
    <Fab
      className={fabSelected ? classNames([classes.fabTheme, classes.selected]) : classes.fabTheme}
      variant="extended"
      size="small"
      onClick={() => selectValue()}
    >
      {themeValue}
    </Fab>
  );
}

ThemeElement.defaultProps = {
  themeValue: null,
  selected: false,
  applyFilter: null,
};

ThemeElement.propTypes = {
  themeValue: PropTypes.string,
  selected: PropTypes.bool,
  applyFilter: PropTypes.func,
};
