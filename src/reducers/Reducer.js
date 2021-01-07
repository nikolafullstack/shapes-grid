import { fromJS, List } from 'immutable'
import { ITEM } from '../actions/types'

const filterShapes = (data, shapeFilters, colorFilters) => {
  return data.filter(s => shapeFilters.indexOf(s.shape) !== -1 && colorFilters.indexOf(s.color) !== -1)
}

const getTitle = (shapeFilters, colorFilters, shapeFilterTypesLength, colorFilterTypesLength) => {
  const isAllShapeFilters = shapeFilters.length === shapeFilterTypesLength;

  const isAllColorFilters = colorFilters.length === colorFilterTypesLength;

  if (isAllShapeFilters && isAllColorFilters) {
    return 'All items';
  }

  if ((isAllColorFilters && shapeFilters.length > 1) ||
    (isAllShapeFilters && colorFilters.length > 1) ||
    (shapeFilters.length > 1 && colorFilters.length > 1)) {
    return 'Multiple items';
  }

  if (isAllColorFilters && shapeFilters.length === 1) {
    return `All ${shapeFilters[0]} items`;
  }

  if (isAllShapeFilters && colorFilters.length === 1) {
    return `All ${colorFilters[0]} items`;
  }

  if (colorFilters.length > 1 && shapeFilters.length === 1) {
    return `Multiple ${shapeFilters[0]} items`;
  }

  if (shapeFilters.length > 1 && colorFilters.length === 1) {
    return `Multiple ${colorFilters[0]} items`;
  }

  return `${shapeFilters[0]} ${colorFilters[0]} items`;
};

const initialState = fromJS({
  data: new List([]),
  shapes: new List([]),
  fetching: false,
  success: false,
  error: null,
  shapeFilterTypes: new List([]),
  colorFilterTypes: new List([]),
  shapeFilters: new List([]),
  colorFilters: new List([]),
  title: 'All items',
})

export default function Reducer(state = initialState, action) {
  let title = ''

  switch (action.type) {
    case ITEM.GET:
    case ITEM.GET_ONE:
    case ITEM.SUCCESS:
    case ITEM.FAILURE:
      return state.merge(action.payload)
    case ITEM.UPDATE_SHAPE_FILTER:
      const shapeFilters = [...state.get('shapeFilters').values()]
      const shapeIndex = shapeFilters.indexOf(action.payload.name);
      let clonedShapeFilters = [...shapeFilters]

      if (shapeIndex === -1) {
        clonedShapeFilters.push(action.payload.name);
      } else {
        clonedShapeFilters.splice(shapeIndex, 1);
      }

      if (clonedShapeFilters.length === 0) {
        clonedShapeFilters = [...state.get('shapeFilterTypes').values()]
      }

      const shapesByShapeFilter = filterShapes(
        [...state.get('data').values()],
        clonedShapeFilters,
        [...state.get('colorFilters').values()],
      )

      title = getTitle(
        clonedShapeFilters,
        [...state.get('colorFilters').values()],
        [...state.get('shapeFilterTypes').values()].length,
        [...state.get('colorFilterTypes').values()].length,
      )

      return state.merge({
        shapes: shapesByShapeFilter,
        shapeFilters: clonedShapeFilters,
        title,
      })
    case ITEM.UPDATE_COLOR_FILTER:
      const colorFilters = [...state.get('colorFilters').values()]
      const colorIndex = colorFilters.indexOf(action.payload.name)
      let clonedColorFilters = [...colorFilters]

      if (colorIndex === -1) {
        clonedColorFilters.push(action.payload.name);
      } else {
        clonedColorFilters.splice(colorIndex, 1);
      }

      if (clonedColorFilters.length === 0) {
        clonedColorFilters = [...state.get('colorFilterTypes').values()]
      }

      const shapesByColorFilter = filterShapes(
        [...state.get('data').values()],
        [...state.get('shapeFilters').values()],
        clonedColorFilters,
      )

      title = getTitle(
        [...state.get('shapeFilters').values()],
        clonedColorFilters,
        [...state.get('shapeFilterTypes').values()].length,
        [...state.get('colorFilterTypes').values()].length,
      )

      return state.merge({
        shapes: shapesByColorFilter,
        colorFilters: clonedColorFilters,
        title,
      })
    default:
      return state
  }
}
