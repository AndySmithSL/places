import React from 'react';
import ProductCategoryRow from './productCategoryRow';
import ProductRow from './productRow';

class ProductTable extends React.Component {
    render() {

        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {

            // Check if name is filtered out
            if(product.name.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
                return;
            }

            // If in stock only checked then filter out unstocked.
            if(inStockOnly && !product.stocked) {
                return null;
            }

            if(product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} />);
            }

            rows.push(<ProductRow product={product} key={product.name} />)
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    };
}

export default ProductTable;
