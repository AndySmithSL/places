import React from 'react';
import './ContentSearchBar.scss';

class ContentSearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = e => this.props.onFilterTextChange(e.target.value);

    render() {

        const filterText = this.props.filter;

        return (
            <form>
                <input type='text' value={filterText}  className="ContentSearchBar" onChange={this.handleFilterTextChange} placeholder='Filter...' ></input>
            </form>
        );
    }
}

export default ContentSearchBar;
