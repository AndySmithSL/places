import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import RouteLegTile from './RouteLegTile';

import { getFullPathImage } from '../../../utils/ImageDetails';

import './RouteLegs.scss';

export const RouteLegs = props => {

    const { route } = props;
    const icon = getFullPathImage("journey");

    let items = [];
    
    route.routeLegs.forEach(leg => {
        items.push(<RouteLegTile routeLeg={leg} key={leg.id} />)
    });

    return (
        <div className='RouteLegs' >
            <DetailsHeader icon={icon} label='Legs' />
            <ContentList items={items} />
        </div>
    );
}
