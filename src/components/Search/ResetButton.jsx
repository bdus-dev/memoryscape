import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import FilterContext from './FilterContext';

export default function Search(props) {

  const { setThemeList, setPlacesList, getQueryFilters } = useContext(FilterContext);

  const history = useHistory();

  const resetSeach = () => {
    setThemeList([]);
    setPlacesList([]);
    history.push('./');
  };

  return (
    <React.Fragment>
      <Button 
          classes={ props.classes } 
          className={ getQueryFilters().length > 1 ? 'active' : ''} 
          onClick={() => resetSeach()}
      >
        <FormattedMessage id="app.search.all" />
      </Button>
    </React.Fragment>
                  
  );
}
