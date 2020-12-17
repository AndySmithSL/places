import React from 'react';
import { PieChart } from '../common/PieChart';
import { getFullPathImage } from '../../../utils/ImageDetails';

export const ContinentTerritoryAreas = props => {

    const { continent } = props;
    let data = [];
    data.push(['Territory', 'Area']);

    continent.totalTerritories.forEach(territory => {
        let item = [];
        item.push(territory.name, territory.area);
        data.push(item);
    });

    return (
        <div>
            <PieChart data={data} icon={getFullPathImage("country")} label='Territory Areas' />
        </div>
    );
}
