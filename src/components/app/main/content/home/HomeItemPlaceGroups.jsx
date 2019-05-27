import React from 'react';
import { connect } from 'react-redux';

import { fetchPlaceGroups } from '../../../../reducers/placeGroups';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemPlaceGroups extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlaceGroups();
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
        fetching: state.placeGroups.fetching,
        items: state.placeGroups.items,
        category: state.categories.categories.find(x => x.name === "Place Groups")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaceGroups: () => dispatch(fetchPlaceGroups()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemPlaceGroups)
