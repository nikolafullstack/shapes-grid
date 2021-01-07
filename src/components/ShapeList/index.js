import React from 'react'
import { useSelector } from 'react-redux'
import ShapeCard from '../ShapeCard'
import {
  shapesSelector,
  titleSelector,
} from '../../selectors/Selector'

const ShapeList = () => {
  const shapes = useSelector(shapesSelector)
  const title = useSelector(titleSelector)

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2 className='col-12 my-5 text-uppercase font-italic'>{title}: </h2>
        {shapes.map((shape, index) => (
          <div className='col-lg-3 col-md-4 col-sm-6 mb-5' key={index}>
            <ShapeCard item={shape} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShapeList
