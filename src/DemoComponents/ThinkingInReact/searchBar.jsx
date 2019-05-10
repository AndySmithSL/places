import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
    }

    handleFilterTextChange = e => this.props.onFilterTextChange(e.target.value);

    handleInStockOnlyChange = e => this.props.onInStockOnlyChange(e.target.checked);

    render() {

        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <input type='text' placeholder='Search...' value={filterText} onChange={this.handleFilterTextChange} ></input>
                <p>
                    <input type='checkbox' checked={inStockOnly} onChange={this.handleInStockOnlyChange} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;
