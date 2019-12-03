import React, { useState, useEffect, useContext } from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import Database from '../../../services/Database';
import ThemeElement from './ThemeElement';
import FilterContext from '../FilterContext';

export default function ThemesList() {
  const { isThemeSelected } = useContext(FilterContext);
  const [themes, setThemes] = useState(null);

  useEffect(() => {
    Database.getVocabulary('temi-ms', (result) => {
      setThemes(result);
    });
  }, []);

  return (
    <React.Fragment>
      <h2>
        <FormattedHTMLMessage id="app.filterModal.themes" />
      </h2>
      {themes && themes.map((e, i) => {
        return (
        <ThemeElement key={i} themeValue={e.trim()} selected={isThemeSelected(e.trim())} />
        );
      })}
    </React.Fragment>
  );
}