import { combineReducers } from 'redux'
import events from './EventReducers'

/**
 *  * Reducerコンパイル
 *   */
const todoApp = combineReducers({
  events
})

export default todoApp
