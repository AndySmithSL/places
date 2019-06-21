import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import { getFullPathImage } from '../../../utils/ImageDetails';
import TerritoryTile from './TerritoryTile';

import './TerritoryRegions.scss';

export const TerritoryRegions = props => {

    const { territory } = props;
    let items = [];
    
    territory.children.forEach(child => {
        items.push(<TerritoryTile territory={child} flag={ child.flag && child.flag.image } key={child.id} />)
    });

    return (
        <div className='TerritoryRegions' >
            <DetailsHeader icon={getFullPathImage("country")} label='Parts' />
            <ContentList items={items} />
        </div>
    );
}
