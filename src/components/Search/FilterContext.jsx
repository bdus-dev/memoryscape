import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FilterContext = createContext({});

function toggleList(arrayList, value) {
  if (arrayList.includes(value)) {
//    return arrayList.filter((el) => el !== value);
    arrayList.pop();
    return arrayList;
  }
  // Con la nuova modifica viene effettuata la ricerca direttamente con l'elemento selezionato
  // Non cancello la logica ma rimuovo i valori presenti nella lista
  arrayList.pop();
  arrayList.push(value);
  return arrayList;
}

function isValidDate(date) {
  return /^(19|20)\d{2}$/.test(date);
}

export function FilterContextComponent({ children }) {
  const [themeList, setThemeList] = useState([]);
  const [placesList, setPlacesList] = useState([]);
  const [yearFrom, setYearFrom] = useState(undefined);
  const [yearTo, setYearTo] = useState(undefined);

  const toggleThemes = (theme) => setThemeList(toggleList(themeList, theme));
  const isThemeSelected = (theme) => themeList.includes(theme);

  const togglePlaces = (place) => setPlacesList(toggleList(placesList, place));
  const isPlaceSelected = (place) => placesList.includes(place);

  const getThemeQueryFilter = () => (themeList.length > 0 ? `themes=${themeList.map((theme) => theme)}` : ' ');
  const getPlaceQueryFilter = () => (placesList.length > 0 ? `places=${placesList.map((theme) => theme)}` : '');

  const addYearFromToQuery = (date) => {
    if (isValidDate(date)) {
      setYearFrom(date);
    }
  };
  const getYearFromQueryFilter = () => (yearFrom ? `year_start=${yearFrom}` : '');

  const addYearToToQuery = (date) => {
    if (isValidDate(date)) {
      setYearTo(date);
    }
  };

  const getYearToQueryFilter = () => (yearTo ? `year_end=${yearTo}` : '');

  const initFilters = (filterToInit) => {
    switch (filterToInit) {
      case 'theme':
        themeList.pop();
        break;

      case 'places':
        setPlacesList([]);
        break;

      default:
        setThemeList();
        setPlacesList();
        break;
    }
  };

  const getQueryFilters = () => {
    let query = getThemeQueryFilter();
    query += query && placesList ? `&${getPlaceQueryFilter()}` : getPlaceQueryFilter();
    query += query && yearFrom ? `&${getYearFromQueryFilter()}` : getYearFromQueryFilter();
    query += query && yearTo ? `&${getYearToQueryFilter()}` : getYearToQueryFilter();
    return query ? `?${query}` : query;
  };

  return (
    <FilterContext.Provider
      value={{ themeList, toggleThemes, isThemeSelected, setThemeList, getQueryFilters, togglePlaces, isPlaceSelected, initFilters, addYearFromToQuery, addYearToToQuery, yearFrom, yearTo }}
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterContextComponent.defaultProps = {
  children: null,
};

FilterContextComponent.propTypes = {
  children: PropTypes.node,
};

export default FilterContext;
