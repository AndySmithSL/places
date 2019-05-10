import React from 'react';
import ContentTile from './content-tile/content-tile';
import './content-list.scss';

class ContentList extends React.Component {
    render() {

        const items = this.props.items;
        const contentItems = items.map(x => {
            return <ContentTile title={x.name} subTitle={x.code} value={x.value} handleClick={this.props.handleItemChange} id={x.id} key={x.id} />;
        });

        return (
            <div className="content-list">
                {contentItems}
            </div>
        );
    }
}

export default ContentList;
