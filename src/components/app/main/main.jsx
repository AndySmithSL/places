import React from 'react';
import IconBar from './icon-bar/icon-bar';
import Content from './content/content';
import './main.scss';

const categories = [
    { name: "Home", icon: "../assets/home.png" },
    { name: "Continents", icon: "../assets/america.png" },
    { name: "Territory Types", icon: "../assets/map.png" },
    { name: "Territories", icon: "../assets/passport.png" },
    { name: "Places", icon: "../assets/marker.png" },
    { name: "Flags", icon: "../assets/flag.png" },
    { name: "Place Groups", icon: "../assets/picture.png" },
    { name: "Drives", icon: "../assets/road.png" },
];

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.handleIconClick = this.handleIconClick.bind(this);
        this.state = { selectedCategory: categories[0] };
    }

    handleIconClick = (category) => {
        console.log(category);
        this.setState({ selectedCategory: category })
    }

    render() {
        return (
            <div className="App-main">
                <IconBar categories={categories} handleClick={ this.handleIconClick } />
                <Content selectedCategory={this.state.selectedCategory} />
            </div>
        );
    }
}

export default Main;
