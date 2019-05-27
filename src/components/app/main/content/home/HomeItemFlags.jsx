import React from 'react';
import { connect } from 'react-redux';

import { fetchFlags } from '../../../../reducers/flags';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemFlags extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchFlags();
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
        fetching: state.flags.fetching,
        items: state.flags.items,
        category: state.categories.categories.find(x => x.name === "Flags")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFlags: () => dispatch(fetchFlags()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemFlags)
