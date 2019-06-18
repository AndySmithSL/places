import React from 'react';
import { connect } from 'react-redux';

import { fetchTerritoryTypes } from '../../../../reducers/territoryTypes';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemTerritoryTypes extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchTerritoryTypes();
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
        fetching: state.territoryTypes.territoryTypes.fetching,
        items: state.territoryTypes.territoryTypes.items,
        category: state.categories.categories.find(x => x.name === "Territory Types")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTerritoryTypes: () => dispatch(fetchTerritoryTypes()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemTerritoryTypes)
