import { createSelector } from 'reselect'
import { filterShapes, getTitle } from '../utils'

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
  state => {
    return filterShapes(
      state.shapes,
      state.selectedShapeFilters,
      state.selectedColorFilters,
    )
  },
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
  state => {
    return getTitle(
      state.selectedShapeFilters,
      state.colorFiltersList,
      state.shapeFiltersList.length,
      state.colorFiltersList.length,
    )
  },
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
