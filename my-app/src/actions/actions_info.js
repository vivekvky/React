export const SURVEYOR_FETCHED = 'SURVEYOR_FETCHED';
export const All_SURVEYORS_FETCHED = 'All_SURVEYORS_FETCHED';

export function fetchAllSurveyor() {
  return (dispatch) => {
    return fetch('http://localhost:54178/api/Surveyor/GetActiveSurveyors', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        dispatch(loadAllSurveyors(json))
      })
      .catch(error => console.log(error));
  }
}


export function fetchSurveyor(id) {
  return (dispatch) => {
    // return fetch('http://localhost:54178/api/Surveyor/GetSurveyorbyId?surveyorId=' + id, {
      return fetch('http://localhost:54178/api/Surveyor/GetSurveyorbyId?surveyorId=02082018-144522332-8c2cef35-9b44-4159-ab60-74f81e11b853', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(loadSurveyor(json))
      })
      .catch(error => console.log(error));
  }

}
export function editSurveyor(surveyor) {
  return (dispatch) => {
    return fetch('http://localhost:54178/api/Surveyor/UpdateSurveyor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyor)

    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(loadSurveyor(json))
      })
      .catch(error => console.log(error));
  }

}
export function addSurveyor(surveyor) {
  return (dispatch) => {
    return fetch('http://localhost:54178/api/Surveyor/AddSurveyor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyor)

    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(loadSurveyor(json))
      })
      .catch(error => console.log(error));
  }

}



export function loadSurveyor(results) {
  return {
    type: SURVEYOR_FETCHED,
    payload: results
  }
}

export function loadAllSurveyors(results) {
  return {
    type: All_SURVEYORS_FETCHED,
    payload: results
  }
}
