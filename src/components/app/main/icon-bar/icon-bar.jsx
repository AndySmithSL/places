import React from 'react';
import './icon-bar.scss';

class IconBar extends React.Component {

    render() {
        return (
            <div className="icon-bar">
                <a href="~"><img src="../assets/home.png" className="icon-bar-image" alt="home"/></a>
                <a href="~"><img src="../assets/america.png" className="icon-bar-image" alt="continents"/></a>
                <a href="~"><img src="../assets/map.png" className="icon-bar-image" alt="territory types"/></a>
                <a href="~"><img src="../assets/passport.png" className="icon-bar-image" alt="territories"/></a>
            </div>
        );
    }

}

export default IconBar;