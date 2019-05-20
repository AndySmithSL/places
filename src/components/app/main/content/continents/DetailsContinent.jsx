import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './DetailsContinent.scss';

export const DetailsContinent = props => {

    let className = 'DetailsContinent ' + props.size;

    return (
        <div className={className} >
            <DetailsHeader icon={props.icon} label={props.label} />
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
                    <div className="label">CODE</div>
                    <div className="value">{ props.item ? props.item.code : '--' }</div>
                </div>
                <div className="DetailsItem">
                    <div className="label">PARENT</div>
                    <div className="value">{ props.item ? props.item.parent ? props.item.parent.name : '--' : '--' }</div>
                </div>
                <div className="DetailsItem">
                    <div className="label">SUB-CONTINENTS</div>
                    <div className="value">{ props.item ? props.item.children.length : '--' }</div>
                </div>
                <div className="DetailsItem">
                    <div className="label">TERRITORIES</div>
                    <div className="value">{ props.item ? props.item.totalTerritories.length : '--' }</div>
                </div>
            </div>
        </div>
    );
}
