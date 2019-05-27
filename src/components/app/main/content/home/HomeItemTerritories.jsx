import React from 'react';
import { connect } from 'react-redux';

import { fetchTerritories } from '../../../../reducers/territories';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemTerritories extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchTerritories();
    }

    handleItemClick() {
        this.props.setCategory(this.props.category);
    }

    render() {

        const { fetching, items, category } = this.props;

        if(fetching) {
            return (
                <div className="loading">
                    LOADING...
                </div>
            )
        }

        return (
            <div className="item">
                <HomeItem category={category} value={items.length} handleItemClick={this.handleItemClick} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.territories.fetching,
        items: state.territories.items,
        category: state.categories.categories.find(x => x.name === "Territories")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTerritories: () => dispatch(fetchTerritories()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemTerritories)
