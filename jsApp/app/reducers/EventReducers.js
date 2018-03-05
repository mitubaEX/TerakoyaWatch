import {GET_USER_SUCCESS, GET_EVENTS_FROM_FIREBASE} from '../actions/EventTypes'

const events = (state = [], action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.events
    case GET_EVENTS_FROM_FIREBASE:
      return action.events
    default:
      return state
  }
}

export default events
