import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import { ICON_PATH, ICON_MARKER } from '../../../utils/Global';
import TerritoryTypeTerritoryItem from './TerritoryTypeTerritoryItem';

import './TerritoryTypeTerritories.scss';

export const TerritoryTypeTerritories = props => {

    const { territoryType } = props;
    const icon = ICON_PATH + ICON_MARKER;
    let items = [];
    
    territoryType.territories.forEach(territory => {
        const flag = territory && territory.flagImage;
        items.push(<TerritoryTypeTerritoryItem territory={territory} flag={flag} key={territory.id} />)
    });

    return (
        <div className="TerritoryTypeTerritories" >
            <DetailsHeader icon={icon} label='Territories' />
            <ContentList items={items} />
        </div>
    );
}
