import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import TerritoryTile from '../territories/TerritoryTile';
import { ICON_PATH, ICON_PASSPORT } from '../../../utils/Global';

import './ContinentTerritories.scss';

export const ContinentTerritories = props => {

    const { continent } = props;
    const icon = ICON_PATH + ICON_PASSPORT;
    let items = [];
    
    continent.totalTerritories.forEach(territory => {
        items.push(<TerritoryTile territory={territory} flag={ territory.flag && territory.flag.image } key={territory.id} />)
    });

    return (
        <div className="ContinentTerritories" >
            <DetailsHeader icon={icon} label='Territories' />
            <ContentList items={items} />
        </div>
    );
}
