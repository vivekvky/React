export const INFO_FETCHED = 'INFO_FETCHED';
export const NEW_INFO = 'NEW_INFO';

export function fetchInfo() {
  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(loadInfo(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadInfo(results) {
  return {
    type : INFO_FETCHED,
    payload : results
  }
}
