import axios from 'axios';

export default class Database {

  static _getData(url, params, callback, apiVersion) {

    let baseUrl = 'https://db-dev.bradypus.net';

    // if (window.location.hostname === 'localhost'){
    //   baseUrl = 'http://db.localhost';
    // }

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
   * Inspects a atble and returns list of fields
   * @param {function} cb Callback function
   * @memberof Database
   */
  static inspect(cb) {
    this._getData('' , {
      tb: 'ms',
      'verb':'inspect'
    }, d => { cb(d); }, 2);
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
   * Searches a string in all available fields of ms table
   * @param {string} string   String to look for
   * @param {integer} page    Page number to get from DB
   * @param {function} cb     Callback function
   * @memberof Database
   */
  static getStr(string, page, cb) {
    this._getData('ms', {
      verb: 'search',
      type: 'fast',
      string: string,
      page: page
    }, d => { cb(d); });
  }

  /**
   * Gets all records from database
   * @param {integer} page    Page number to get from DB
   * @param {function} cb     Callback function
   * @memberof Database
   */
  static getAll(page, cb) {
    this._getData('ms', {
      verb : 'search',
      type: 'all',
      page: page
    }, d => { cb(d); });
  }

  /**
   * Runs a simple (one field) query using = (strict) or LIKE
   *
   * @param {string} fld    Field to look in (prefix__app-name:fld-name)
   * @param {string} val    Value to look for
   * @param {boolean} strict  If true = operator will be used, otherwize LIKE
   * @param {integer} page  Page number to get from DB
   * @param {function} cb   Callback function
   * @memberof Database
   */
  static getSimple(fld, val, strict, page, cb){
    const data = {
      verb: 'search',
      type: 'advanced',
      page: page,
      'adv[a0][fld]': fld,
      'adv[a0][operator]': strict ? '=' : 'LIKE',
      'adv[a0][value]': val
    };
    this._getData('ms', data, d => { cb(d); });
  }

  /**
   * Executes an advanced query on the database
   * @param  {object}   data Object of query data: {a:{f:'fieldname', v:'value', o: 'operator'}, a2:{f:'fieldname', v:'value', o: 'operator', c: 'connector'}}
   * @param  {integer}   page Page number to get from DB
   * @param  {function} cb   Callback function
   * @memberof Database
   */
  static getAdv(data, page, cb) {
    let d = {
      verb: 'search',
      type: 'advanced',
      page: page
    };
    Object.entries(data).forEach(([k, v]) => {
      d[`adv[${k}][fld]`] = v.f;
      d[`adv[${k}][value]`] = v.v;
      d[`adv[${k}][operator]`] = v.o;
      d[`adv[${k}][connector]`] = v.c;
    });

    this._getData('ms', d, d => { cb(d); });
  }


  /**
   * Gets list of unique values for a field from database
   *
   * @param {string} fld    fiald name
   * @param {string} string value filter
   * @param {function} cb   callback function
   * @memberof Database
   */
  static getUniqueVal(fld, string, cb) {
    this._getData('', {
      verb: 'getUniqueVal',
      tb: 'ms',
      fld: fld,
      s: string
    }, d => { cb(d); }, 2);

  }

  /**
   * Runs base64 encoded where statement
   *
   * @param {string} sql    Base64 encoded where statement
   * @param {integer} page  Page number to get from DB 
   * @param {function} cb   Callback function
   * @memberof Database
   */
  static getByEncodedSql(sql, page, cb) {
    this._getData('ms', {
      verb: 'search',
      type: 'encoded',
      q_encoded: sql,
      page: page
    }, d => { cb(d); });
  }


  static getDecade(decade, page, cb) {
    if (![20, 30, 40, 50, 60, 70, 80, 90].includes(decade)){
      console.log(`Invalid parameter decade: ${decade}`);
      return false;
    }
    const start_y = parseInt(`19${decade}`) - 1;
    const end_y = start_y + 10;
    let d = {
      verb: 'search',
      type: 'advanced',
      page: page,
      "adv[a][fld]": "hm__ms:anno",
      "adv[a][value]": start_y,
      "adv[a][operator]": ">",
      "adv[b][fld]": "hm__ms:anno",
      "adv[b][value]": end_y,
      "adv[b][operator]": "<",
      "adv[b][connector]": "AND",
    };

    this._getData('ms', d, d => { cb(d); });
  }

}
