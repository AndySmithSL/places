import React from 'react';
import ContentList from './content-list/content-list';
import './content-main.scss';
import { DetailsTerritory } from './details/details-territory';
import TerritoryTile from './content-list/content-tile/territory-tile';

const territories = [
    { id: 6276, name: "Addis Ababa", fullName: "Addis Ababa", iso: "ET-AA", localName: "አዲስ አበባ",  places: 1, subdivisions: 0 },
    { id: 4202, name: "Abruzzo", fullName: "Abruzzo", iso: "IT-65", localName: "Abbrùzzu",  places: 0, subdivisions: 0 },
    { id: 55, name: "Afghanistan", fullName: "Islamic Republic of Afghanistan", iso: "AF", localName: "جمهوری اسلامی افغانستان",  places: 0, subdivisions: 34 },
    { id: 13, name: "Australia", fullName: "Commonwealth of Australia", iso: "AU", localName: "",  places: 1, subdivisions: 14 },
    { id: 60, name: "Fiji", fullName: "Republic of Fiji", iso: "FJ", localName: "Matanitu Tugalala o Viti",  places: 0, subdivisions: 5 },
    { id: 5437, name: "Zealand Region", fullName: "Zealand Region", iso: "DK-85", localName: "",  places: 0, subdivisions: 0 },
    { id: 5214, name: "Utrecht", fullName: "Utrecht", iso: "NL-UT", localName: "",  places: 1, subdivisions: 0 },
    { id: 4152, name: "Saxony", fullName: "Free State of Saxony", iso: "DE-SN", localName: "Freistaat Sachsen",  places: 13, subdivisions: 0 },
    { id: 4301, name: "Seoul Special City", fullName: "Seoul Special City", iso: "KR-11", localName: "서울특별시",  places: 1, subdivisions: 0 },
];

class ContentTerritories extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
        this.state = { selectedItemId: territories[0].id }; 
    }

    handleItemChange = (id) => {
        console.log(id);
        this.setState({ selectedItemId: id })
    }

    render() {

        const territory = territories.find(x => x.id === this.state.selectedItemId);

        const items = territories.map(item => {
            return <TerritoryTile item={item} icon={this.props.category.icon} handleClick={this.handleItemChange} />
        });

        return (
            <div className="content-main">
                <ContentList items={items} />
                <DetailsTerritory item={territory} icon={this.props.category.icon} />
            </div>
        );
    }
}

export default ContentTerritories;
