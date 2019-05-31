import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import TerritoryTile from '../territories/TerritoryTile';

import { ICON_PATH, ICON_PASSPORT } from '../../../utils/Global';

import './FlagTerritories.scss';

export const FlagTerritories = props => {

    let items = [];
    const icon = ICON_PATH + ICON_PASSPORT;

    props.flag.territories.forEach(territory => {
        items.push(<TerritoryTile territory={territory} key={territory.id} />)
    });

    return (
        <div className="Territories" >
            <DetailsHeader icon={icon} label='Territories' />
            <ContentList items={items} />
        </div>
    );
}
