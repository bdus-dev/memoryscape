import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FilterContext = createContext({});

function toggleList(arrayList, value) {
  if (arrayList.includes(value)) {
    return arrayList.filter((el) => el !== value);
  }
  arrayList.push(value);
  return arrayList;
}

export function FilterContextComponent({ children }) {
  const [themeList, setThemeList] = useState([]);
  const [placesList, setPlacesList] = useState([]);

  const toggleThemes = (theme) => setThemeList(toggleList(themeList, theme));
  const isThemeSelected = (theme) => themeList.includes(theme);

  const togglePlaces = (place) => setPlacesList(toggleList(placesList, place));
  const isPlaceSelected = (place) => placesList.includes(place);

  const getThemeQueryFilter = () => (themeList.length > 0 ? `themes=${themeList.map((theme) => theme)}` : '');
  const getPlaceQueryFilter = () => (placesList.length > 0 ? `places=${placesList.map((theme) => theme)}` : '');

  const initFilters = () => {
    setThemeList([]);
    setPlacesList([]);
  };

  const getQueryFilters = () => {
    let query = getThemeQueryFilter();
    query += query ? `&${getPlaceQueryFilter()}` : getPlaceQueryFilter();
    return query ? `?${query}` : query;
  };

  return (
    <FilterContext.Provider
      value={{ themeList, toggleThemes, isThemeSelected, getQueryFilters, togglePlaces, isPlaceSelected, initFilters }}
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
