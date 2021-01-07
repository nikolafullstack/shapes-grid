import { createActionTypes } from '../utils'

export const ITEM = createActionTypes('ITEM', [
  'GET',
  'SUCCESS',
  'FAILURE',
  'UPDATE_SHAPE_FILTER',
  'UPDATE_COLOR_FILTER',
])

export default ITEM
