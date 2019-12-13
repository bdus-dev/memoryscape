import axios from 'axios';

const app = 'er';

export default class Database {


  static _getData(url, params, callback, apiVersion) {

    let baseUrl = 'https://db.bradypus.net';

    if (window.location.hostname === 'localhost'){
      baseUrl = 'http://db.localhost';
    }

    baseUrl += `/api/${ apiVersion === 2 ? 'v2/' : '' }hm/`;

    axios({
      method: 'post',
      url: baseUrl + url,
      params: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      if (res.data.type && res.data.type === 'error'){
        console.log('API error:');
        console.log(res.data.text);
        return false;
      }
      callback(res.data);
    })
    .catch( res => {
      if(res instanceof Error) {
        console.log(res.message);
      } else {
        console.log(res.data);
      }
    });
  }

  /**
   * Get one record from Database
   * @param {integer} id  Record IS
   * @param {function} cb Callback function
   * @memberof Database
   */
  static getOne(id, cb) {
    this._getData('', {
      tb : 'ms',
      verb : 'read',
      id : id
    }, d => { cb(d); }, 2
    );
  }


  /**
   * Gets all records from database
   * @param {integer} page    Page number to get from DB
   * @param {function} cb     Callback function
   * @memberof Database
   */
  static getAll(page, cb) {
    this._getData('ms', {
      verb: 'search',
      type: 'encoded',
      q_encoded: btoa( `app LIKE  '%${app}%'` ),
      page: page
    }, d => { cb(d); });
  }


  /**
   * Gets list of unique values for a field from database
   *
   * @param {string} fld    field name
   * @param {function} cb   callback function
   * @memberof Database
   */
  static getUniqueVal(fld, cb) {
    this._getData('', {
      verb: 'getUniqueVal',
      tb: 'ms',
      fld: fld
    }, d => { cb(d); }, 2);

  }

  /**
   * Gets list of unique values for a vocabulary
   *
   * @param {string} voc    vocabulary name
   * @param {function} cb   callback function
   * @memberof Database
   */
  static getVocabulary(voc, cb) {
    this._getData('', {
      verb: 'getVocabulary',
      voc: voc
    }, d => { cb(d); }, 2);

  }

  /**
   * 
   * i film della decade 20 hanno:
   *  annoda < 30 (max_limit)
   *  annoa >=20 (min_limit)
   */
  static getDecade(decade, page, cb) {
    const validDecades = [20, 30, 40, 50, 60, 70, 80, 90];
    if (!validDecades.includes(decade)){
      console.log(`Invalid parameter decade: ${decade}: only one of ${validDecades.join(',')} is allowed`);
      return false;
    }
    const min_limit = parseInt(`19${decade}`);
    const max_limit = min_limit + 10;
    let d = {
      verb: 'search',
      type: 'encoded',
      q_encoded: btoa( `(app LIKE  '%${app}%') AND annoda < ${max_limit} AND annoa >= ${min_limit}` ),
      page: page
    };

    this._getData('ms', d, d => { cb(d); });
  }

  /**
   * 
   * @param {string} places place or places separated by comma
   * @param {string} themes theme or themes separated by comma
   * @param {integer} page page to return 
   * @param {function} cb callback function
   */
  static getByPlacesAndThemse(places, themes, page, cb) {
    if (!places && !themes){
      cb(false);
    }
    let where = [`(app LIKE '%${app}%')`];

    if (places){
      places.split(",").forEach( (e, i) => {
        where.push(` luogo LIKE '%${e}%' `);
      });
    }
    if (themes){
      themes.split(",").forEach( (e, i) => {
        where.push(` temi LIKE '%${e}%' `);
      });
    }
    this._getData('ms', {
      verb: 'search',
      type: 'encoded',
      q_encoded: btoa( where.join(' AND ') ),
      page: page
    }, d => { cb(d) });
  }

  static getByAuthor(author, page, cb) {
    this._getData('ms', {
      verb: 'search',
      type: 'encoded',
      q_encoded: btoa( `(app LIKE  '%${app}%') AND aut LIKE '%${author}%'` ),
      page: page
    }, d => { cb(d); });
  }

  static getMsGeoJson(where, cb) {
    let data = {
      "join": "JOIN hm__geodata as g ON g.table_link = 'hm__ms' AND g.id_link = hm__ms.id ",
      "fields[g.geometry]": "Geometry",
      "fields[hm__ms.id]": "Id",
      "fields[hm__ms.videoid]": "ID Video",
      "fields[hm__ms.tit]": "Titolo",
      "fields[hm__ms.aut]": "Autore",
      "fields[hm__ms.annoda]": "Anno da",
      "fields[hm__ms.annoa]": "Anno a",
      "group": "hm__ms.id",
      "limit_start": "0",
      "limit_end": "500",
      "q_encoded": btoa( ( where ? '(' + where.replace(/`id`/gi, '`hm__ms`.`id`') + `) AND app LIKE '%${app}%'`: `app LIKE '%${app}%'` ))
    };

    this._getData(
      'ms?verb=search&geojson=true&type=encoded',
      data,
      d => {
        cb( d );
      }
    );
  }

}
