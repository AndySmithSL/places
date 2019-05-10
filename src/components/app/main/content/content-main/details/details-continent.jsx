import React from 'react';
import './details.scss';
import { DetailsHeader } from './details-header/details-header';

export const DetailsContinent = (props) => {
    return (
        <div className="details">
            <DetailsHeader title={props.continent.name} image="../assets/america.png" />
        </div>
    );
}
