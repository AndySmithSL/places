import React from 'react';

import { getFullPathImage } from '../../../utils/ImageDetails';

import './RouteLegTile.scss';

class RouteLegTile extends React.Component {

    render() {

        const { routeLeg } = this.props;
       
        return (
            <div className='RouteLegTile'>
                <div>
                    <img src={getFullPathImage("route")} className="image" alt={routeLeg.number} />
                </div>
                <div className='details'>
                    <div className='number'>{routeLeg.number}</div>
                    <div className='title'>{routeLeg.origin} to {routeLeg.destination}</div>
                </div>
            </div>
        );
    }
}

export default RouteLegTile;
