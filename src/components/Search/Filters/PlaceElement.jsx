import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FilterContext from '../FilterContext';

const useStyles = makeStyles(() => ({
  itemPlace: {
    fontSize: '0.7rem',
    textTransform: 'capitalize',
    padding: '0',
    marginRight: '2em',
    '&:hover': {
      color: '#7a1dcf',
    },
  },
  itemText: {
    marginBottom: '0',
  },
  selected: {
    color: '#7a1dcf',
    '&:hover': {
      color: '#e0e0e0',
    },
  },
}));

export default function PlaceElement(props) {
  const { togglePlaces } = useContext(FilterContext);
  const { placeValue, selected } = props;
  const [itemSelected, setItemSelected] = useState(selected);
  const classes = useStyles();

  const selectValue = () => {
    setItemSelected((!itemSelected));
    togglePlaces(placeValue);
  };

  return (
    <ListItem
      className={itemSelected ? classNames([classes.itemPlace, classes.selected]) : classes.itemPlace}
      button
      onClick={() => selectValue()}
    >
      <ListItemText className={classes.itemText}>{placeValue}</ListItemText>
    </ListItem>
  );
}

PlaceElement.defaultProps = {
  placeValue: null,
  selected: false,
};

PlaceElement.propTypes = {
  placeValue: PropTypes.string,
  selected: PropTypes.bool,
};
