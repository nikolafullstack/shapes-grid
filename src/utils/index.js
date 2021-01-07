export function createActionTypes(base, actions = []) {
  return actions.reduce((acc, type) => {
    acc[type] = `${base}_${type}`

    return acc
  }, {})
}

export function createAction(type, data = {}) {
  return { type, payload: data }
}

export function uniqArray(a) {
  return Array.from(new Set(a))
}

export function filterShapes(data, selectedShapeFilters, selectedColorFilters) {
  return data.filter(s => selectedShapeFilters.indexOf(s.shape) !== -1 && selectedColorFilters.indexOf(s.color) !== -1)
}

export function getTitle(
  selectedShapeFilters,
  selectedColorFilters,
  shapeFiltersListLength,
  colorFiltersListLength
) {
  const isAllShapeFiltersSelected = selectedShapeFilters.length === shapeFiltersListLength;
  const isAllColorFiltersSelected = selectedColorFilters.length === colorFiltersListLength;

  if (isAllShapeFiltersSelected && isAllColorFiltersSelected) {
    return 'All items';
  }

  if ((isAllColorFiltersSelected && selectedShapeFilters.length > 1) ||
    (isAllShapeFiltersSelected && selectedColorFilters.length > 1) ||
    (selectedShapeFilters.length > 1 && selectedColorFilters.length > 1)) {
    return 'Multiple items';
  }

  if (isAllColorFiltersSelected && selectedShapeFilters.length === 1) {
    return `All ${selectedShapeFilters[0]} items`;
  }

  if (isAllShapeFiltersSelected && selectedColorFilters.length === 1) {
    return `All ${selectedColorFilters[0]} items`;
  }

  if (selectedColorFilters.length > 1 && selectedShapeFilters.length === 1) {
    return `Multiple ${selectedShapeFilters[0]} items`;
  }

  if (selectedShapeFilters.length > 1 && selectedColorFilters.length === 1) {
    return `Multiple ${selectedColorFilters[0]} items`;
  }

  return `${selectedShapeFilters[0]} ${selectedColorFilters[0]} items`;
};
