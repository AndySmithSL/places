import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { ICON_PATH, ICON_DETAILS } from '../../../utils/Global';

import './TerritoryDetails.scss';

export const TerritoryDetails = props => {

    const { item } = props;
    const icon = ICON_PATH + ICON_DETAILS;

    return (
        <div className="TerritoryDetails" >
            <DetailsHeader icon={icon} label='Details' />
            <div className="TerritoryDetailsRow" >
                <div className="TerritoryDetailsItem whole">
                    <div className="label">FULL NAME</div>
                    <div className="value">{ item ? item.fullName : '--' }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">ID</div>
                    <div className="value">{ item ? item.id : '--' }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">CODE</div>
                    <div className="value">{ item ? item.isocode : '--' }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">POPULATION</div>
                    <div className="value">{ item ? item.populationLabel : '--' }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">AREA</div>
                    <div className="value">{ item ? item.areaLabel : '--' }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">PART OF</div>
                    <div className="value">{ item ? item.partOf : '--' }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">TYPE</div>
                    <div className="value">{ item ? item.territoryType.type : '--' }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">PARTS</div>
                    <div className="value">{ item.children.length }</div>
                </div>
                <div className="TerritoryDetailsItem half">
                    <div className="label">PLACES</div>
                    <div className="value">{ item.places.length }</div>
                </div>
            </div>
        </div>
    );
}
