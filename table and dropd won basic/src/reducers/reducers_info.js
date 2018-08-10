import {
  INFO_FETCHED
} from '../actions/actions_info'

const info = (state = [], action) => {
  switch (action.type) {
    case INFO_FETCHED:
      return action.payload
    default:
      return state
  }
}

export default info
