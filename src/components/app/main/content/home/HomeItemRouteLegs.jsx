import React from 'react';
import { connect } from 'react-redux';

import { fetchRouteLegs } from '../../../../reducers/routeLegs';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemRouteLegs extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRouteLegs();
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
        fetching: state.routeLegsMain.fetching,
        items: state.routeLegsMain.routeLegs.items,
        category: state.categories.categories.find(x => x.name === "Route Legs")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRouteLegs: () => dispatch(fetchRouteLegs()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemRouteLegs)
