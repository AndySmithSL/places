import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/items';

class ItemList extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         items: [],
    //         hasErrored: false,
    //         isLoading: false
    //     };
    // }

    // fetchData(url) {
    //     this.setState({ isLoading: true });

    //     fetch(url)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }

    //             this.setState({ isLoading: false });

    //             return response;
    //         })
    //         .then(response => response.json())
    //         .then(items => this.setState({ items }))
    //         .catch(() => this.setState({ hasErrored: true }));
    // }

    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        //this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if(this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items.</p>
        }

        if(this.props.isLoading) {
            return <p>Loading...</p>
        }

        return (
            <ul>
                {this.props.items.map(i => (
                    <li key={i.id}>
                        {i.label}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
