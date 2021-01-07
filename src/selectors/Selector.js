import { createSelector } from 'reselect'

const shapesState = state => state.shape

const fetchingSelector = createSelector(
  shapesState,
  state => state.fetching,
)

const errorSelector = createSelector(
  shapesState,
  state => state.error,
)

const shapesSelector = createSelector(
  shapesState,
  state => state.shapes,
)

const shapeFiltersListSelector = createSelector(
  shapesState,
  state => state.shapeFiltersList,
)

const colorFiltersListSelector = createSelector(
  shapesState,
  state => state.colorFiltersList,
)

const selectedShapeFiltersSelector = createSelector(
  shapesState,
  state => state.selectedShapeFilters,
)

const selectedColorFiltersSelector = createSelector(
  shapesState,
  state => state.selectedColorFilters,
)

const titleSelector = createSelector(
  shapesState,
  state => state.title,
)

export {
  shapesSelector,
  fetchingSelector,
  errorSelector,
  shapeFiltersListSelector,
  colorFiltersListSelector,
  selectedShapeFiltersSelector,
  selectedColorFiltersSelector,
  titleSelector,
}
