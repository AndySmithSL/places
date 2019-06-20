import React from 'react';

import { ICON_PATH, ICON_ROUTE } from '../../../utils/Global';

import './DriveLegTile.scss';

class DriveLegTile extends React.Component {

    render() {

        const { driveLeg } = this.props;
        const icon = ICON_PATH + ICON_ROUTE;
       
        return (
            <div className='DriveLegTile'>
                <div>
                    <img src={icon} className="image" alt={driveLeg.number} />
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
