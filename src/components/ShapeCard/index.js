import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './style.css';

const ShapeCard = ({ item }) => {
  const renderColorArea = () => {
    const style = item.shape === 'triangle' ?
      { background: `linear-gradient(to right bottom, ${item.color} 50%, transparent 50%)` } :
      { backgroundColor: item.color };

    return <div className='color-area' style={style} />;
  };

  return (
    <Card>
      <Card.Body>
        <div className={`shape-item-container ${item.shape}`}>
          <div className="dummy"></div>
          <div className='wrapper d-flex align-items-center'>
            {renderColorArea()}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const shapeItemType = {
  id: PropTypes.number,
  shape: PropTypes.string,
  color: PropTypes.string
}

ShapeCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape(shapeItemType))
};

export default ShapeCard;
