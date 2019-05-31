import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './Territories.scss';
import ContentList from '../common/ContentList';
import TerritoryTile from '../territories/TerritoryTile';

export const Territories = props => {

    let items = [];

    console.log(props.item.totalTerritories);

    props.item.totalTerritories.forEach(territory => {
        items.push(<TerritoryTile territory={territory} key={territory.id} />)
    });

    return (
        <div className="Territories" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <ContentList items={items} />
        </div>
    );
}
