import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import TerritoryTile from '../territories/TerritoryTile';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './ContinentTerritories.scss';

export const ContinentTerritories = props => {

    const { continent } = props;
    let items = [];
    
    continent.totalTerritories.forEach(territory => {
        items.push(<TerritoryTile territory={territory} flag={ territory.flag && territory.flag.image } key={territory.id} />)
    });

    return (
        <div className="ContinentTerritories" >
            <DetailsHeader icon={ getFullPathImage("country") } label='Territories' />
            <ContentList items={items} />
        </div>
    );
}
