import React from 'react';
import { DetailsHeader } from './detailsHeader/detailsHeader';

import './details.scss';

export const DetailsTerritory = (props) => {
    return (
        <div className="details">
            <DetailsHeader title={props.item.name} icon={props.icon} />
        </div>
    );
}
