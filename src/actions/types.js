import { createActionTypes } from '../utils'

export const SHAPE = createActionTypes('SHAPE', [
  'GET',
  'SUCCESS',
  'FAILURE',
  'UPDATE_SHAPE_FILTER',
  'UPDATE_COLOR_FILTER',
])

export default SHAPE
