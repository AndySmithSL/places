import React from 'react';
import './details.scss';
import { DetailsHeader } from './detailsHeader/detailsHeader';

export const DetailsTerritoryType = (props) => {
    return (
        <div className="details">
            <DetailsHeader title={props.item.type} icon={props.icon} />
        </div>
    );
}
