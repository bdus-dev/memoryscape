import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Typography, Box } from '@material-ui/core';
import BlackTmpl from '../Templates/BlackTmpl';

import {title} from '../../cfg';

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
  },
  mainTitle: {
    fontSize: '3.2em',
    letterSpacing: '0.1em',
    marginBlockStart: '0',
  },
  
}));

export default function About(props) {
  const classes = useStyles();
  const lang = props.lang || props.match.params.lang;

  return (
    <BlackTmpl lang={lang}>
      <Typography className={classes.boxContainer} component="div">
        <Box className={classes.textBox}>
          <h5>HOME MOVIES DIGITAL ARCHIVE</h5>
          <h2 className={classes.mainTitle}>
            {title.main}<br /> {title.sub}
          </h2>
          <p><strong>percorsi tematici, geografici e cronologici nel cinema privato</strong></p>

          <p><em>lungo la via emilia</em> è la prima uscita di memoryscapes, il progetto di Home Movies per 
          l’accesso on line al patrimonio audiovisivo privato del secolo scorso.</p>
          
          <p><em>lungo la via emilia</em> propone una fruizione esperienziale e narrativa dei contenuti 
          d’archivio per mezzo di chiavi d’accesso ai temi presenti nelle pellicole, 
          alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. 
          Un viaggio nel tempo e nello spazio, dagli Appennini al Po, dalle città alla 
          pianura e al mare. Ogni singola clip costituisce una microstoria e allo stesso 
          tempo diviene una singola tessera di un mosaico di storie virtualmente infinito 
          e componibile liberamente. Buona navigazione!</p>

          <p><em>lungo la via emilia</em> è frutto di un lungo lavoro di ricerca, selezione, 
          descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm 
          girate tra gli anni ‘30 e gli anni ‘80 del XX secolo.</p>
          
          <p>Per commenti e suggerimenti scrivi a: <a href="mailto: info@homemovies.it">info@homemovies.it</a></p>

          <h3>Credits</h3>

          <p>Un progetto di Home Movies</p>
          
          <p><strong>Comitato scientifico</strong>: Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), 
          Michele Guerra (Università di Parma), Giacomo Manzoli (Università di Bologna),
          Rick Prelinger (University of California Santa Cruz).</p>

          <h4>Team del progetto</h4>
          <ul style={{ listStyle: 'none'}}>
            <li>Direzione: Paolo Simoni</li>
            <li>Architettura e gestione dei contenuti: Ilaria Ferretti</li>
            <li>Producer: Giulia Simi</li>
            <li>Ricerche, descrizioni ed editing: Ilaria Ferretti, Chiara Petrucci, Silvia Savorelli, Paolo Simoni</li>
            <li>Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara</li>
            <li>Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin</li>
            <li>Realizzazione db e web: Bradypus</li>
            <li>Grafica: Giulia Ripa</li>
          </ul>

          <h4>Partner istituzionali</h4>
          <p>Istituto Storico Parri e Kinè società cooperativa</p>
          <p>Il progetto è realizzato con il contributo di Regione Emilia-Romagna e MiBACT</p>

          <p>Gli archivi audiovisivi da cui sono tratte le clip sono stati raccolti, 
          digitalizzati, catalogati assieme a: Associazione Home Movies Emilia Romagna 
          nel quadro di un’attività sostenuta da Comune di Reggio Emilia. Reggiani per 
          esempio), Università di Modena e Reggio Emilia, Biblioteca Panizzi, Associazione 
          Sguardi in Camera di Ravenna e Cineteca di Rimini.</p>
        </Box>
      </Typography>
    </BlackTmpl>
  );
}
