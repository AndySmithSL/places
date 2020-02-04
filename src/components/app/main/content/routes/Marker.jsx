import React from 'react';
import './Marker.scss';

const Marker = props => {
    const { color, name, id } = props;
    return (
      <div className="marker pulse"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;
