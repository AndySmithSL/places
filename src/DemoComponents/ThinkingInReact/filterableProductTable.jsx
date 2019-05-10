import React from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';

class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnlyChanged = this.handleInStockOnlyChanged.bind(this);
    }

    handleFilterTextChange = filterText => this.setState({ filterText });

    handleInStockOnlyChanged = inStockOnly => this.setState({ inStockOnly });

    render() {
        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly} 
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockOnlyChange={this.handleInStockOnlyChanged}
                />
                <ProductTable 
                    products={this.props.products} 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;
