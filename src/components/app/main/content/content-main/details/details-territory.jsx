import React from 'react';
import { DetailsHeader } from './details-header/details-header';

import './details.scss';

export const DetailsTerritory = (props) => {
    return (
        <div className="details">
            <DetailsHeader title={props.item.name} icon={props.icon} />
        </div>
    );
}
