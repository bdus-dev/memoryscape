import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FilterContext from './FilterContext';

export default function Search(props) {

  const { getQueryFilters } = useContext(FilterContext);

  const history = useHistory();

  const setDecade = (dec) => {
    history.push(`./?decade=${dec}`);
  };

  if (getQueryFilters().length > 1){
    return null;
  }

  return (
    <React.Fragment>
      {
        [30, 40, 50, 60, 70, 80].map((e, i) => {
          return (<Button
                    classes={ props.classes }
                    className={ Number(props.currDecade) === e ? 'active' : ''}
                    key={i}
                    onClick={() => setDecade(e)}>'{e}
                  </Button>
                  )
          })
      }
    </React.Fragment>
                  
  );
}
