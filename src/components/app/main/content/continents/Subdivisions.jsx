import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './Subdivisions.scss';
import ContentList from '../common/ContentList';
import TileContinent from './TileContinent';

export const Subdivisons = props => {

    let className = 'Subdivisions ' + props.size;

    let items = [];

    console.log(props.item.children);

    props.item.children.forEach(continent => {
        items.push(<TileContinent item={continent} icon={props.icon} key={continent.id} />)
    });

    return (
        <div className={className} >
            <DetailsHeader icon={props.icon} label={props.label} />
            <ContentList items={items} />
        </div>
    );
}
