import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './Territories.scss';
import ContentList from '../common/ContentList';
import TileTerritory from '../territories/TileTerritory';

export const Territories = props => {

    let items = [];

    console.log(props.item.totalTerritories);

    props.item.totalTerritories.forEach(territory => {
        items.push(<TileTerritory item={territory} icon={props.icon} key={territory.id} />)
    });

    return (
        <div className="Territories" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <ContentList items={items} />
        </div>
    );
}
