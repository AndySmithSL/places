import React from 'react';
import ContentList from './content-list/content-list';
import { DetailsContinent } from './details/details-continent';
import './content-main.scss';
import ContinentTile from './content-list/content-tile/continent-tile';

const continents =  
    [
        { id: 3002, name: "Antartica", code: "001", parent: {}, territories: 12 },
        { id: 3025, name: "Africa", code: "002", parent: {}, territories: 58 },
        { id: 3028, name: "Asia", code: "142", parent: {}, territories: 53 },
        { id: 3026, name: "Europe", code: "150", parent: {}, territories: 52 },
        { id: 3027, name: "Americas", code: "019", parent: {}, territories: 56 },
        { id: 3029, name: "Oceania", code: "009", parent: {}, territories: 28 },
        { id: 3003, name: "Eastern Africa", code: "014", parent: { id: 3025, name: "Africa", code: "002", parent: {}}, territories: 19 },
        { id: 3008, name: "Western Europe", code: "155", parent: { id: 3026, name: "Europe", code: "150", parent: {}}, territories: 9 },
        { id: 3014, name: "Central America", code: "013", parent: { id: 3027, name: "Americas", code: "019", parent: {}}, territories: 9 },
        { id: 3019, name: "South-Eastern Asia", code: "035", parent: { id: 3028, name: "Asia", code: "142", parent: {}}, territories: 11 },
    ];

class ContentContinents extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
        this.state = { selectedItemId: continents[0].id }; 
    }

    handleItemChange = (id) => {
        console.log(id);
        this.setState({ selectedItemId: id })
    }

    render() {

        const continent = continents.find(x => x.id === this.state.selectedItemId);

        const items = continents.map(item => {
            return <ContinentTile item={item} icon={this.props.category.icon} handleClick={this.handleItemChange} />
        });

        return (
            <div className="content-main">
                <ContentList items={items} />
                <DetailsContinent item={continent} icon={this.props.category.icon} />
            </div>
        );
    }
}

export default ContentContinents;
