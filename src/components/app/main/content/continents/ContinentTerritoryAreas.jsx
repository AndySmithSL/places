import React from 'react';
import { PieChart } from '../common/PieChart';

export const ContinentTerritoryAreas = props => {

    const { continent, category } = props;
    let data = [];
    data.push(['Territory', 'Area']);

    continent.territories.forEach(territory => {
        let item = [];
        item.push(territory.name, territory.area);
        data.push(item);
    });

    return (
        <div>
            <PieChart data={data} icon={category.icon} label='Territory Areas' />
        </div>
    );
}
