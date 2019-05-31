import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import { ICON_PATH, ICON_PASSPORT } from '../../../utils/Global';

import './TerritoryRegions.scss';
import TerritoryTile from './TerritoryTile';

export const TerritoryRegions = props => {

    const { territory } = props;
    const icon = ICON_PATH + ICON_PASSPORT;
    const flag = territory.flag && territory.flag.image;
    let items = [];
    
    territory.children.forEach(child => {
        items.push(<TerritoryTile territory={child} flag={ child.flag && child.flag.image } key={child.id} />)
    });

    return (
        <div className="TerritoryRegions" >
            <DetailsHeader icon={icon} label='Parts' />
            <ContentList items={items} />
        </div>
    );
}
