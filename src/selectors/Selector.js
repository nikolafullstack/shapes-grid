import { createSelector } from 'reselect'

const shapesState = state => state.get('data')

const DataSelector = createSelector(
  shapesState,
  state => {
    return [...state.get('data').values()]
  },
)

const fetchingSelector = createSelector(
  shapesState,
  state => state.get('fetching'),
)

const errorSelector = createSelector(
  shapesState,
  state => {
    const error = state.get('error')

    return error
  },
)

const shapesSelector = createSelector(
  shapesState,
  state => [...state.get('shapes').values()],
)

const shapeFilterTypesSelector = createSelector(
  shapesState,
  state => [...state.get('shapeFilterTypes').values()],
)

const colorFilterTypesSelector = createSelector(
  shapesState,
  state => [...state.get('colorFilterTypes').values()],
)

const shapeFiltersSelector = createSelector(
  shapesState,
  state => [...state.get('shapeFilters').values()],
)

const colorFiltersSelector = createSelector(
  shapesState,
  state => [...state.get('colorFilters').values()],
)

const titleSelector = createSelector(
  shapesState,
  state => state.get('title'),
)

export {
  DataSelector,
  shapesSelector,
  fetchingSelector,
  errorSelector,
  shapeFilterTypesSelector,
  colorFilterTypesSelector,
  shapeFiltersSelector,
  colorFiltersSelector,
  titleSelector,
}
