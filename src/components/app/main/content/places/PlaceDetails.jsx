import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { ICON_PATH, ICON_DETAILS } from '../../../utils/Global';

import './PlaceDetails.scss';

export const PlaceDetails = props => {

    const icon = ICON_PATH + ICON_DETAILS;
    const { item } = props;
    const territories = territoryString(item.territories);

    return (
        <div className='PlaceDetails' >
            <DetailsHeader icon={icon} label='Details' />
            <div className="PlaceDetailsRow" >
                <div className="PlaceDetailsItem whole">
                    <div className="label">LOCAL NAME</div>
                    <div className="value">{ props.item ? props.item.localName ? props.item.localName : '--' : '--' }</div>
                </div>
                <div className="PlaceDetailsItem whole">
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
                    <div className="label">DRIVES</div>
                    <div className="value">{ '0' }</div>
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
