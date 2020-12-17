import React from 'react';
import { PieChart } from '../common/PieChart';
import { getFullPathImage } from '../../../utils/ImageDetails';

export const ContinentTerritoryPopulations = props => {

    const { continent } = props;
    let data = [];
    data.push(['Territory', 'Population']);

    if (continent.totalTerritories) {
        continent.totalTerritories.forEach(territory => {
            let item = [];
            item.push(territory.name, territory.population);
            data.push(item);
        });
    }
    
    return (
        <div>
            <PieChart data={data} icon={getFullPathImage("country")} label='Territory Population' />
        </div>
    );
}
