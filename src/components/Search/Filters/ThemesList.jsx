import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';

import Database from '../../../services/Database';
import ThemeElement from './ThemeElement';
import FilterContext from '../FilterContext';

import {app} from '../../../cfg';

export default function ThemesList(props) {
  const { isThemeSelected, placesList } = useContext(FilterContext);
  const { applyFilter } = props;
  const [themes, setThemes] = useState(null);

  useEffect(() => {
    Database.getUniqueVal('temi', false, `app|LIKE|%${app}%${placesList[0] ? `||and|luogo|=|${placesList[0]}` : ''}`, (result) => {
      setThemes(result.sort());
    });
  }, []);

  return (
    <React.Fragment>
      <h2>
        <FormattedHTMLMessage id="app.themes" />
      </h2>
      {themes && themes.map((e, i) => {
        return (
        <ThemeElement key={i} themeValue={e.trim()} selected={isThemeSelected(e.trim())} applyFilter={applyFilter} />
        );
      })}
    </React.Fragment>
  );
}

ThemesList.defaultProps = {
  applyFilter: null,
};

ThemesList.propTypes = {
  applyFilter: PropTypes.func,
};
