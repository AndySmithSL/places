import React from 'react';

import { getFullPathImage } from '../../../utils/ImageDetails';

import './DriveLegTile.scss';

class DriveLegTile extends React.Component {

    render() {

        const { driveLeg } = this.props;
       
        return (
            <div className='DriveLegTile'>
                <div>
                    <img src={getFullPathImage("route")} className="image" alt={driveLeg.number} />
                </div>
                <div className='details'>
                    <div className='number'>{driveLeg.number}</div>
                    <div className='title'>{driveLeg.origin} to {driveLeg.destination}</div>
                </div>
            </div>
        );
    }
}

export default DriveLegTile;
