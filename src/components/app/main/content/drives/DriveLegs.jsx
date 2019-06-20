import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import DriveLegTile from './DriveLegTile';
import { ICON_PATH, ICON_PASSPORT } from '../../../utils/Global';


import { ImageDetails } from '../../../utils/ImageDetails';

import './DriveLegs.scss';

export const DriveLegs = props => {

    const { drive } = props;
    const icon = ImageDetails.getFullPathImage("journey");
    let items = [];
    
    drive.driveLegs.forEach(leg => {
        items.push(<DriveLegTile driveLeg={leg} key={leg.id} />)
    });

    return (
        <div className='DriveLegs' >
            <DetailsHeader icon={icon} label='Legs' />
            <ContentList items={items} />
        </div>
    );
}
