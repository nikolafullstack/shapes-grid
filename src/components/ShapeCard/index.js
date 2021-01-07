import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import './styles.scss'

const ShapeCard = ({ item }) => {
  const style = item.shape === 'triangle' ?
    { background: `linear-gradient(to right bottom, ${item.color} 50%, transparent 50%)` } :
    { backgroundColor: item.color }

  return (
    <Card>
      <Card.Body>
        <div className={`shape-item-container ${item.shape}`}>
          <div className='dummy'></div>
          <div className='wrapper d-flex align-items-center'>
            <div className='color-area' style={style} />
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

ShapeCard.propTypes = {
  item: PropTypes.object
}

export default ShapeCard
