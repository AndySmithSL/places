import React from 'react';

import { getFullPathImage } from '../../../utils/ImageDetails';

import './RouteLegTile.scss';

const RouteLegTile = props => {

    const { routeLeg } = props;
    
    return (
        <div className='RouteLegTile'>
            <div>
                <img src={getFullPathImage("journey")} className="image" alt={routeLeg.number} />
            </div>
            <div className='details'>
                <div className='title'>{routeLeg.route}: Leg {routeLeg.number}</div>
                <div className='subtitle'>{routeLeg.origin} : {routeLeg.destination}</div>
            </div>
        </div>
    );
    
}

export default RouteLegTile;
