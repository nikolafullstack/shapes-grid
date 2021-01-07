import { createAction } from '../utils'
import { ITEM } from './types'

export const item = {
  request: () => createAction(ITEM.GET, { fetching: true, success: false, error: null }),
  requestOne: id => createAction(ITEM.GET_ONE, {
    id, fetching: true, success: false, error: null,
  }),
  success: data => createAction(ITEM.SUCCESS, {
    ...data,
    shapes: [...data.data],
    fetching: false,
    success: true,
    error: null,
    shapeFilterTypes: Array.from(new Set(data.data.map(s => s.shape))),
    colorFilterTypes: Array.from(new Set(data.data.map(s => s.color))),
    shapeFilters: Array.from(new Set(data.data.map(s => s.shape))),
    colorFilters: Array.from(new Set(data.data.map(s => s.color))),
  }),
  failure: error => createAction(ITEM.FAILURE, { ...error, fetching: false, success: false }),
  updateShapeFilter: name => createAction(ITEM.UPDATE_SHAPE_FILTER, {
    name,
  }),
  updateColorFilter: name => createAction(ITEM.UPDATE_COLOR_FILTER, {
    name,
  }),
}
