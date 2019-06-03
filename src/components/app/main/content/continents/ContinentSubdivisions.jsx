import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import ContinentTile from './ContinentTile';
import { ICON_PATH, ICON_AMERICA } from '../../../utils/Global';

import './ContinentSubdivisions.scss';

export const ContinentSubdivisons = props => {

    let items = [];
    const icon = ICON_PATH + ICON_AMERICA;

    props.item.children.forEach(continent => {
        items.push(<ContinentTile item={continent} icon={icon} key={continent.id} />)
    });

    return (
        <div className="ContinentSubdivisions" >
            <DetailsHeader icon={icon} label='SUB-CONTINENTS' />
            <ContentList items={items} />
        </div>
    );
}
