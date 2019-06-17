import React from 'react';
import { PieChart } from '../common/PieChart';

export const ContinentTerritoryPopulations = props => {

    const { continent, category } = props;
    let data = [];
    data.push(['Territory', 'Population']);

    continent.territories.forEach(territory => {
        let item = [];
        item.push(territory.name, territory.population);
        data.push(item);
    });

    return (
        <div>
            <PieChart data={data} icon={category.icon} label='Territory Population' />
            {/* <ColumnChart data={data} icon={category.icon} label='Territory Population' /> */}
        </div>
    );
}
