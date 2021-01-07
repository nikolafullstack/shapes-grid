import { ITEM } from '../actions/types'
import { filterShapes, getTitle } from '../utils'

const initialState = {
  data: [],
  shapes: [],
  fetching: false,
  success: false,
  error: null,
  shapeFiltersList: [],
  colorFiltersList: [],
  selectedShapeFilters: [],
  selectedColorFilters: [],
  title: 'All items',
}

export default function ShapeReducer(state = initialState, action) {
  let title = ''
  let clonedFilters = []

  switch (action.type) {
    case ITEM.GET:
    case ITEM.SUCCESS:
    case ITEM.FAILURE:
      return {
        ...state,
        ...action.payload
      }
    case ITEM.UPDATE_SHAPE_FILTER:
      const shapeIndex = state.selectedShapeFilters.indexOf(action.payload.name);
      clonedFilters = [...state.selectedShapeFilters]

      if (shapeIndex === -1) {
        clonedFilters.push(action.payload.name);
      } else {
        clonedFilters.splice(shapeIndex, 1);
      }

      if (clonedFilters.length === 0) {
        clonedFilters = [...state.shapeFiltersList]
      }

      const shapesByShapeFilter = filterShapes(
        state.data,
        clonedFilters,
        state.selectedColorFilters,
      )

      title = getTitle(
        clonedFilters,
        state.selectedColorFilters,
        state.shapeFiltersList.length,
        state.colorFiltersList.length,
      )

      return {
        ...state,
        shapes: shapesByShapeFilter,
        selectedShapeFilters: clonedFilters,
        title,
      }
    case ITEM.UPDATE_COLOR_FILTER:
      const colorIndex = state.selectedColorFilters.indexOf(action.payload.name)
      clonedFilters = [...state.selectedColorFilters]

      if (colorIndex === -1) {
        clonedFilters.push(action.payload.name);
      } else {
        clonedFilters.splice(colorIndex, 1);
      }

      if (clonedFilters.length === 0) {
        clonedFilters = [...state.colorFiltersList]
      }

      const shapesByColorFilter = filterShapes(
        state.data,
        state.selectedShapeFilters,
        clonedFilters,
      )

      title = getTitle(
        state.selectedShapeFilters,
        clonedFilters,
        state.shapeFiltersList.length,
        state.colorFiltersList.length,
      )

      return {
        ...state,
        shapes: shapesByColorFilter,
        selectedColorFilters: clonedFilters,
        title,
      }
    default:
      return state
  }
}
