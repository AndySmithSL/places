import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { ICON_PATH, ICON_DETAILS } from '../../../utils/Global';

import './PlaceDetails.scss';

export const PlaceDetails = props => {

    const { flag } = props;
    const icon = ICON_PATH + ICON_DETAILS;

    return (

        <div className='' >
            <DetailsHeader icon={icon} label='Details' />
            <div className="row" >
                <div className="DetailsItem">
                    <div className="label">ID</div>
                    <div className="value">{ props.item ? props.item.id : '--' }</div>
                </div>
                <div className="DetailsItem">
                    <div className="label">NAME</div>
                    <div className="value">{ props.item ? props.item.name : '--' }</div>
                </div>
                <div className="DetailsItem">
                    <div className="label">LOCAL NAME</div>
                    <div className="value">{ props.item ? props.item.localName : '--' }</div>
                </div>
                <div className="DetailsItem">
                    <div className="label">LATITUDE</div>
                    <div className="value">{ props.item ? props.item.latitudeDegrees : '--' }</div>
                </div>
                <div className="DetailsItem">
                    <div className="label">LONGITUDE</div>
                    <div className="value">{ props.item ? props.item.longitudeDegrees : '--' }</div>
                </div>
            </div>
        </div>
    );
}
