import React from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import {
  shapeFilterTypesSelector,
  colorFilterTypesSelector,
  shapeFiltersSelector,
  colorFiltersSelector,
} from '../../selectors/Selector'
import { item } from '../../actions'

import './style.css'

const Filters = () => {
  const dispatch = useDispatch()
  const shapeFilterTypes = useSelector(shapeFilterTypesSelector)
  const colorFilterTypes = useSelector(colorFilterTypesSelector)
  const shapeFilters = useSelector(shapeFiltersSelector)
  const colorFilters = useSelector(colorFiltersSelector)

  const handleShapeFilter = shapeName => {
    dispatch(item.updateShapeFilter(shapeName))
  }

  const handleColorFilter = colorName => {
    dispatch(item.updateColorFilter(colorName))
  }

  return (
    <div className='container-fluid'>
      <div className='row my-5'>
        <div className='col-6 d-flex'>
          {shapeFilterTypes.map((sType, index) => (
            <div
              className={classNames('shape-filter text-uppercase font-italic font-weight-bold mr-4', {
                'text-dark': shapeFilters.indexOf(sType) !== -1,
                'text-muted': shapeFilters.indexOf(sType) === -1
              })}
              key={`shape-filter-${index}`}
              onClick={() => handleShapeFilter(sType)}
            ><h4>{sType}</h4></div>
          ))}
        </div>
        <div className='col-6 d-flex justify-content-end'>
          {colorFilterTypes.map((cType, index) => (
            <div
            className={classNames('color-filter ml-3', {
              'active': colorFilters.indexOf(cType) !== -1
            })}
              key={`color-filter-${index}`}
              style={{backgroundColor: cType}}
              onClick={() => handleColorFilter(cType)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filters
