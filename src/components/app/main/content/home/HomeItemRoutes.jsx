import React from 'react';
import { connect } from 'react-redux';

import { fetchRoutes } from '../../../../reducers/routes';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemRoutes extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRoutes();
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
        fetching: state.routes.fetching,
        items: state.routes.routes.items,
        category: state.categories.categories.find(x => x.name === "Routes")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRoutes: () => dispatch(fetchRoutes()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemRoutes)
