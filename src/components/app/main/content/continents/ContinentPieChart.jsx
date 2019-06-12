import React from 'react';
import { PieChart } from '../common/PieChart';

export const ContinentPieChart = props => {

    const { continent, category } = props;
    let data = [];
    data.push(['Sub-Continent', 'Territories']);

    continent.children.forEach(c => {
        let item = [];
        item.push(c.name, c.territories);
        data.push(item);
    });

    return (
        <div>
            <PieChart data={data} icon={category.icon} label='Territories by Sub-continent' />
        </div>
    );
}
