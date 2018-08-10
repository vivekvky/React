import {
  SURVEYOR_FETCHED, All_SURVEYORS_FETCHED
} from '../actions/actions_info'

const surveyor = (state = [], action) => {
  switch (action.type) {
    case SURVEYOR_FETCHED:
      return action.payload
    case All_SURVEYORS_FETCHED:
      return action.payload
    default:
      return state
  }
}

export default surveyor
