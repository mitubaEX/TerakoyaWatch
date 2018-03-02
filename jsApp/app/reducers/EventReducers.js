import {GET_USER_SUCCESS} from '../actions/EventTypes'

const events = (state = [], action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return action.events
        default:
            return state
    }
}

export default events
