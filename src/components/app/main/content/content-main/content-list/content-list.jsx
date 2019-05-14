import React from 'react';
import ContentTile from './content-tile/content-tile';
import './content-list.scss';

class ContentList extends React.Component {
    render() {
        const items = this.props.items;

        return (
            <div className="content-list">
                {items}
            </div>
        );
    }
}

export default ContentList;
