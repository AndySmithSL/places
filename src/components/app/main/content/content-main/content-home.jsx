import React from 'react';
import './content-main.scss';
import ItemList from '../../../../../DemoComponents/item-list';

class ContentHome extends React.Component {

    render() {
        return (
            <div className="content-main">
                <div>Some random Place</div>
                <div>Some random Place</div>
                <div>Some random Territory</div>
                <div>
                    <ItemList />
                </div>
            </div>
        );
    }
}

export default ContentHome;
