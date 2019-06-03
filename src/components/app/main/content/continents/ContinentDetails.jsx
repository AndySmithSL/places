import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { ICON_PATH, ICON_DETAILS } from '../../../utils/Global';

import './ContinentDetails.scss';
import ContinentDetailsParent from './ContinentDetailsParent';

export const ContinentDetails = props => {

    const { item } = props;
    const icon = ICON_PATH + ICON_DETAILS;

    return (
        <div className="ContinentDetails" >
            <DetailsHeader icon={icon} label='Details' />
            <div className="ContinentDetailsRow" >
                <div className="ContinentDetailsItem half">
                    <div className="label">ID</div>
                    <div className="value">{ item ? item.id : '--' }</div>
                </div>
                <div className="ContinentDetailsItem half">
                    <div className="label">CODE</div>
                    <div className="value">{ item ? item.code : '--' }</div>
                </div>

                { item.parent && <ContinentDetailsParent item={item.parent} />} 

                { !item.parent && 
                    <div className="ContinentDetailsItem half">
                        <div className="label">PARENT</div>
                        <div className="value">{ props.item ? props.item.parent ? props.item.parent.name : '--' : '--' }</div>
                    </div> 
                }
                
                <div className="ContinentDetailsItem half">
                    <div className="label">SUB-CONTINENTS</div>
                    <div className="value">{ props.item ? props.item.children.length : '--' }</div>
                </div>
                <div className="ContinentDetailsItem half">
                    <div className="label">TERRITORIES</div>
                    <div className="value">{ props.item ? props.item.totalTerritories.length : '--' }</div>
                </div>
            </div>
        </div>
    );
}
