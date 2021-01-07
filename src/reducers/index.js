import { combineReducers } from 'redux-immutable'
import Reducer from './Reducer'

const rootReducer = asyncReducers => combineReducers({
  data: Reducer,
  ...asyncReducers,
})

export default rootReducer
