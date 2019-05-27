import React from 'react';
import { connect } from 'react-redux';

import { fetchContinents } from '../../../../reducers/continents';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemContinents extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchContinents();
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
        fetching: state.continents.fetching,
        items: state.continents.items,
        category: state.categories.categories.find(x => x.name === "Continents")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContinents: () => dispatch(fetchContinents()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemContinents)
