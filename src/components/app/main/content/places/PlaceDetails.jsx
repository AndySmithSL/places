import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './PlaceDetails.scss';

export const PlaceDetails = props => {

    const { item } = props;
    const territories = territoryString(item.territories);

    return (
        <div className='PlaceDetails' >
            <DetailsHeader icon={getFullPathImage("information")} label='Details' />
            <div className='PlaceDetailsRow' >
                <div className='PlaceDetailsItem half'>
                    <div className="label">LOCAL NAME</div>
                    <div className="value">{ props.item ? props.item.localName ? props.item.localName : '--' : '--' }</div>
                </div>
                <div className="PlaceDetailsItem half">
                    <div className="label">{ item.territories.length > 1 ? 'TERRITORIES' : 'TERRITORY' }</div>
                    <div className="value">{ props.item ? territories : '--' }</div>
                </div>
                <div className="PlaceDetailsItem half">
                    <div className="label">LATITUDE</div>
                    <div className="value">{ props.item ? props.item.latitudeDegrees : '--' }</div>
                </div>
                <div className="PlaceDetailsItem half">
                    <div className="label">LONGITUDE</div>
                    <div className="value">{ props.item ? props.item.longitudeDegrees : '--' }</div>
                </div>
                <div className="PlaceDetailsItem half">
                    <div className="label">ID</div>
                    <div className="value">{ props.item ? props.item.id : '--' }</div>
                </div>
                <div className="PlaceDetailsItem half">
                    <div className="label">ELEVATION</div>
                    <div className="value">{ item.elevation.results.length > 0 ? Math.round(item.elevation.results[0].elevation) + 'm' : '--' }</div>
                </div>
            </div>
        </div>
    );
}

const territoryString = territories => {
    let first = true;
    let result = '';

    if(!territories && territories.length === 0) {
        return '--';
    }

    territories.forEach(territory => {
        if(first) {
            result += territory.name;
            first = false;
        } else {
            result += ', ' + territory.name;
        }
    });

    return result;
}
