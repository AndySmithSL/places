import React from 'react';
import ContentList from './content-list/content-list';
import { DetailsContinent } from './details/details-continent';
import './content-main.scss';

class ContentMain extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
        this.state = { selectedItemId: this.props.items[0].id }; 
    }

    handleItemChange = (id) => {
        console.log(id);
        this.setState({ selectedItemId: id })
    }

    render() {

        const { items } = this.props;
        const continent = items.find(x => x.id === this.state.selectedItemId);

        return (
            <div className="content-main">
                <ContentList items={items} handleItemChange={this.handleItemChange} />
                <DetailsContinent continent={continent} />
            </div>
        );
    }
}

export default ContentMain;
