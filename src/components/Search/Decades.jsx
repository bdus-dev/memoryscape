import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Search(props) {

  const history = useHistory();

  const setDecade = (dec) => {
    history.push(`./?decade=${dec}`);
  };

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
