import React from 'react';
import ContentList from './content-list/content-list';
import './content-main.scss';
import TerritoryTypeTile from './content-list/content-tile/territory-type-tile';
import { DetailsTerritoryType } from './details/details-territory-type';

const territoryTypes = [
    { id: 1, type: "Default", territories: 258 },
    { id: 3, type: "Country", territories: 200 },
    { id: 2002, type: "Province", territories: 280 },
    { id: 4007, type: "Region", territories: 244 },
    { id: 4006, type: "District", territories: 165 },
    { id: 3007, type: "State", territories: 161 },
    { id: 4005, type: "Municipality", territories: 92 },
    { id: 6005, type: "Parish", territories: 83 },
    { id: 4011, type: "County", territories: 61 },
    { id: 6016, type: "Rayon", territories: 57 },
];

class ContentTerritoryTypes extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
        this.state = { selectedItemId: territoryTypes[0].id }; 
    }

    handleItemChange = (id) => {
        console.log(id);
        this.setState({ selectedItemId: id })
    }

    render() {

        const territoryType = territoryTypes.find(x => x.id === this.state.selectedItemId);

        const items = territoryTypes.map(item => {
            return <TerritoryTypeTile item={item} icon={this.props.category.icon} handleClick={this.handleItemChange} />
        });

        return (
            <div className="content-main">
                <ContentList items={items} />
                <DetailsTerritoryType item={territoryType} icon={this.props.category.icon} />
            </div>
        );
    }
}

export default ContentTerritoryTypes;
