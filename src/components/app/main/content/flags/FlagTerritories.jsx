import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import TerritoryTile from '../territories/TerritoryTile';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './FlagTerritories.scss';

export const FlagTerritories = props => {

    let items = [];

    props.flag.territories.forEach(territory => {
        items.push(<TerritoryTile territory={territory} key={territory.id} />)
    });

    return (
        <div className="FlagTerritories" >
            <DetailsHeader icon={getFullPathImage("country")} label='Territories' />
            <ContentList items={items} />
        </div>
    );
}
