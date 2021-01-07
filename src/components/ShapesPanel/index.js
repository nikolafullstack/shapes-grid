import React from 'react'
import { useSelector } from 'react-redux'
import ShapeCard from '../ShapeCard'
import {
  shapesSelector,
  titleSelector,
} from '../../selectors/Selector'

const ShapesPanel = () => {
  const shapes = useSelector(shapesSelector)
  const title = useSelector(titleSelector)

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2 className='col-12 my-5 text-uppercase font-italic'>{title}: </h2>
        {shapes.map((shape, index) => (
          <div className='col-3 mb-5' key={index}>
            <ShapeCard item={shape} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShapesPanel
