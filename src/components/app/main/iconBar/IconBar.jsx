import React from 'react';
import IconBarItem from './IconBarItem';

import './IconBar.scss';

class IconBar extends React.Component {

    render() {

        const items = this.props.categories;
        const iconBarItems = items.map(category => {
            return <IconBarItem category={category} handleClick={this.props.handleClick} key={category.name} />;
        });

        return (
            <div className="IconBar">
               {iconBarItems}
            </div>
        );
    }

}

export default IconBar;
