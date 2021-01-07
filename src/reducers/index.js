import { combineReducers } from 'redux'
import ShapeReducer from './ShapeReducer'

const rootReducer = asyncReducers => combineReducers({
  shape: ShapeReducer,
  ...asyncReducers,
})

export default rootReducer
