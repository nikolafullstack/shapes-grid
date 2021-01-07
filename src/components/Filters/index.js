import React from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import {
  shapeFiltersListSelector,
  colorFiltersListSelector,
  selectedShapeFiltersSelector,
  selectedColorFiltersSelector,
} from '../../selectors/Selector'
import { shape } from '../../actions'

import './styles.scss'

const Filters = () => {
  const dispatch = useDispatch()
  const shapeFiltersList = useSelector(shapeFiltersListSelector)
  const colorFiltersList = useSelector(colorFiltersListSelector)
  const selectedShapeFilters = useSelector(selectedShapeFiltersSelector)
  const selectedColorFilters = useSelector(selectedColorFiltersSelector)

  const handleShapeFilter = shapeName => {
    dispatch(shape.updateShapeFilter(shapeName))
  }

  const handleColorFilter = colorName => {
    dispatch(shape.updateColorFilter(colorName))
  }

  return (
    <div className='container-fluid'>
      <div className='row my-5'>
        <div className='col-12 d-flex justify-content-between flex-wrap'>
          <div className='d-flex flex-wrap'>
            {shapeFiltersList.map((sType, index) => (
              <div
                className={classNames('shape-filter text-uppercase font-italic font-weight-bold mr-4 mb-3', {
                  'text-dark': selectedShapeFilters.indexOf(sType) !== -1,
                  'text-muted': selectedShapeFilters.indexOf(sType) === -1
                })}
                key={`shape-filter-${index}`}
                onClick={() => handleShapeFilter(sType)}
              >
                <h4>{sType}</h4>
              </div>
            ))}
          </div>
          <div className='d-flex flex-wrap'>
            {colorFiltersList.map((cType, index) => (
              <div
                className={classNames('color-filter mr-3 mb-3', {
                  'active': selectedColorFilters.indexOf(cType) !== -1
                })}
                key={`color-filter-${index}`}
                style={{backgroundColor: cType}}
                onClick={() => handleColorFilter(cType)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
