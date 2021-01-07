import React, { useState, useEffect, useRef } from "react";
import { Alert } from "react-bootstrap";
import classNames from "classnames";
import ShapeCard from '../ShapeCard/index';
import './style.css';

const Shapes = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [shapeFilterTypes, setShapeFilterTypes] = useState([]);
  const [colorFilterTypes, setColorFilterTypes] = useState([]);
  const shapeFiltersRef = useRef([]);
  const colorFiltersRef = useRef([]);

  const getData = () => {
    fetch('shapes.json' ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        setData(data);
        setFilteredData(data);
        setShapeFilterTypes(Array.from(new Set(data.map(a => a.shape))));
        setColorFilterTypes(Array.from(new Set(data.map(a => a.color))));
      }
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const filterShapes = () => {
    const filtered = data.filter(s => {
      if (shapeFiltersRef.current.length === 0 && colorFiltersRef.current.length === 0) {
        return true;
      }

      if (shapeFiltersRef.current.length === 0) {
        return colorFiltersRef.current.indexOf(s.color) !== -1;  
      }

      if (colorFiltersRef.current.length === 0) {
        return shapeFiltersRef.current.indexOf(s.shape) !== -1;
      }

      return shapeFiltersRef.current.indexOf(s.shape) !== -1 && colorFiltersRef.current.indexOf(s.color) !== -1;
    });
    setFilteredData(filtered);
  };

  const handleShapeFilter = name => {
    const index = shapeFiltersRef.current.indexOf(name);

    if (index === -1) {
      shapeFiltersRef.current.push(name);
    } else {
      shapeFiltersRef.current.splice(index, 1);
    }

    filterShapes();
  };

  const handleColorFilter = name => {
    const index = colorFiltersRef.current.indexOf(name);

    if (index === -1) {
      colorFiltersRef.current.push(name);
    } else {
      colorFiltersRef.current.splice(index, 1);
    }

    filterShapes();
  };

  const getTitle = () => {
    const isAllShapeFilters = shapeFiltersRef.current.length === 0 ||
      shapeFiltersRef.current.length === shapeFilterTypes.length;

    const isAllColorFilters = colorFiltersRef.current.length === 0 ||
      colorFiltersRef.current.length === colorFilterTypes.length;

    if (isAllShapeFilters && isAllColorFilters) {
      return 'All items';
    }

    if ((isAllColorFilters && shapeFiltersRef.current.length > 1) ||
      (isAllShapeFilters && colorFiltersRef.current.length > 1)) {
      return 'Multiple items';
    }

    if (isAllColorFilters && shapeFiltersRef.current.length === 1) {
      return `All ${shapeFiltersRef.current[0]} items`;
    }

    if (isAllShapeFilters && colorFiltersRef.current.length === 1) {
      return `All ${colorFiltersRef.current[0]} items`;
    }

    if (colorFiltersRef.current.length > 1 && shapeFiltersRef.current.length === 1) {
      return `Multiple ${shapeFiltersRef.current[0]} items`;
    }

    if (shapeFiltersRef.current.length > 1 && colorFiltersRef.current.length === 1) {
      return `Multiple ${colorFiltersRef.current[0]} items`;
    }

    return `${shapeFiltersRef.current[0]} ${colorFiltersRef.current[0]} items`;
  };

  if (filteredData.length === 0) {
    return <Alert variant="warning">No shapes.</Alert>
  }

  const title = getTitle();

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-6 d-flex">
          {shapeFilterTypes.map((sType, index) => (
            <div
              className={classNames('shape-filter text-uppercase font-italic font-weight-bold mr-4', {
                'text-dark': shapeFiltersRef.current.indexOf(sType) !== -1,
                'text-muted': shapeFiltersRef.current.indexOf(sType) === -1
              })}
              key={`shape-filter-${index}`}
              onClick={() => handleShapeFilter(sType)}
            ><h4>{sType}</h4></div>
          ))}
        </div>
        <div className="col-6 d-flex justify-content-end">
          {colorFilterTypes.map((cType, index) => (
            <div
              className={classNames('color-filter ml-3', {
                'active': colorFiltersRef.current.indexOf(cType) !== -1
              })}
              key={`color-filter-${index}`}
              style={{backgroundColor: cType}}
              onClick={() => handleColorFilter(cType)}
            />
          ))}
        </div>
      </div>

      <h2 className="my-5 text-uppercase font-italic">{title}: </h2>

      <div className="row">
        {filteredData.map((shape, index) => (
          <div className="col-3 mb-5" key={index}>
            <ShapeCard item={shape} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shapes;
