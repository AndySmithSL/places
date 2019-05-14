import React from 'react';
import './icon-bar.scss';
import IconBarItem from './icon-bar-item/icon-bar-item';

class IconBar extends React.Component {

    render() {

        const items = this.props.categories;
        const iconBarItems = items.map(category => {
            return <IconBarItem category={category} handleClick={this.props.handleClick} key={category.name} />;
        });

        return (
            <div className="icon-bar">
               {iconBarItems}
            </div>
        );
    }

}

export default IconBar;
