import axios from "axios";

/**
* getEndpointPath()
*
* @returns {null|string}
*/
export function httpHost() {
  let {drupalSettings} = window;
  if (drupalSettings) {
    return drupalSettings.path.schemeAndHttp;
  }else {
    return null
  }
}

/**
 * currentQuery()
 * @returns {null|object}
 */
export function currentQuery() {
  let {drupalSettings} = window;
  if (drupalSettings) {
    return Object(drupalSettings) && Object(drupalSettings.path) && drupalSettings.path.hasOwnProperty('currentQuery') ? drupalSettings.path.currentQuery : null;
  }else {
    return null
  }
}

/**
 * currentPath()
 * @returns {null|object}
 */
export function currentPath() {
  let {drupalSettings} = window;
  if (drupalSettings) {
    return Object(drupalSettings) && Object(drupalSettings.path) ? drupalSettings.path : null;
  }else {
    return null
  }
}

/**
 * getData()
 *  Get list array elements
 * @param {string} path
 * @returns
 */
export function getData(path) {
  return new Promise((resolve) => {
    axios.get(`${httpHost()}${path}`)
      .then(res => {
        let r = (res && res.data && Array.isArray(res.data)) ? res.data : []
        resolve(r);
      })
  });
}
