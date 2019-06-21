import React from 'react';
import { PieChart } from '../common/PieChart';
import { getFullPathImage } from '../../../utils/ImageDetails';

export const ContinentPieChart = props => {

    const { continent } = props;
    let data = [];
    data.push(['Sub-Continent', 'Territories']);

    continent.children.forEach(c => {
        let item = [];
        item.push(c.name, c.territories);
        data.push(item);
    });

    return (
        <div>
            <PieChart data={data} icon={getFullPathImage("country")} label='Territories by Sub-continent' />
        </div>
    );
}
