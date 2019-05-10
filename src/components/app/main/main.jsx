import React from 'react';
import IconBar from './icon-bar/icon-bar';
import Content from './content/content';
import './main.scss';

const continents =  
    [
        { id: 3002, name: "Antartica", code: "001", parent: {} },
        { id: 3025, name: "Africa", code: "002", parent: {} },
        { id: 3028, name: "Asia", code: "142", parent: {} },
        { id: 3026, name: "Europe", code: "150", parent: {} },
        { id: 3027, name: "Americas", code: "019", parent: {} },
        { id: 3029, name: "Oceania", code: "009", parent: {} },
        { id: 3003, name: "Eastern Africa", code: "014", parent: { id: 3025, name: "Africa", code: "002", parent: {}}},
        { id: 3008, name: "Western Europe", code: "155", parent: { id: 3026, name: "Europe", code: "150", parent: {}}},
        { id: 3014, name: "Central America", code: "013", parent: { id: 3027, name: "Americas", code: "019", parent: {}}},
        { id: 3019, name: "South-Eastern Asia", code: "035", parent: { id: 3028, name: "Asia", code: "142", parent: {}}},
    ];

class Main extends React.Component {
    render() {
        return (
            <div className="App-main">
                <IconBar />
                <Content items={continents} />
            </div>
        );
    }
}

export default Main;
