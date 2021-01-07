import { SHAPE } from '../actions/types'

const initialState = {
  shapes: [],
  fetching: false,
  success: false,
  error: null,
  shapeFiltersList: [],
  colorFiltersList: [],
  selectedShapeFilters: [],
  selectedColorFilters: [],
}

export default function ShapeReducer(state = initialState, action) {
  let clonedFilters = []

  switch (action.type) {
    case SHAPE.GET:
    case SHAPE.SUCCESS:
    case SHAPE.FAILURE:
      return {
        ...state,
        ...action.payload
      }
    case SHAPE.UPDATE_SHAPE_FILTER:
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

      return {
        ...state,
        selectedShapeFilters: clonedFilters,
      }
    case SHAPE.UPDATE_COLOR_FILTER:
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

      return {
        ...state,
        selectedColorFilters: clonedFilters,
      }
    default:
      return state
  }
}
