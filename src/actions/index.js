import { createAction } from '../utils'
import { SHAPE } from './types'
import { uniqArray } from '../utils'

export const shape = {
  request: () => createAction(SHAPE.GET, { fetching: true, success: false, error: null }),
  success: data => createAction(SHAPE.SUCCESS, {
    shapes: [...data.data],
    fetching: false,
    success: true,
    error: null,
    shapeFiltersList: uniqArray(data.data.map(s => s.shape)),
    colorFiltersList: uniqArray(data.data.map(s => s.color)),
    selectedShapeFilters: uniqArray(data.data.map(s => s.shape)),
    selectedColorFilters: uniqArray(data.data.map(s => s.color)),
  }),
  failure: error => createAction(SHAPE.FAILURE, { ...error, fetching: false, success: false }),
  updateShapeFilter: name => createAction(SHAPE.UPDATE_SHAPE_FILTER, {
    name,
  }),
  updateColorFilter: name => createAction(SHAPE.UPDATE_COLOR_FILTER, {
    name,
  }),
}
