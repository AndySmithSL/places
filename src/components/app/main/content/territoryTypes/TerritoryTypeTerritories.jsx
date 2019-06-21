import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import { getFullPathImage } from '../../../utils/ImageDetails';
import TerritoryTypeTerritoryItem from './TerritoryTypeTerritoryItem';

import './TerritoryTypeTerritories.scss';

export const TerritoryTypeTerritories = props => {

    const { territoryType } = props;
    let items = [];
    
    territoryType.territories.forEach(territory => {
        const flag = territory && territory.flagImage;
        items.push(<TerritoryTypeTerritoryItem territory={territory} flag={flag} key={territory.id} />)
    });

    return (
        <div className='TerritoryTypeTerritories' >
            <DetailsHeader icon={getFullPathImage("country")} label='Territories' />
            <ContentList items={items} />
        </div>
    );
}
