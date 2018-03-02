import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import events from './EventReducers'

/**
 *  * Reducerコンパイル
 *   */
const todoApp = combineReducers({
  todos,
  visibilityFilter,
  events
})

export default todoApp
