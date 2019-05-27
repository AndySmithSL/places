import React from 'react';
import { connect } from 'react-redux';

import { fetchDrives } from '../../../../reducers/drives';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';

class HomeItemDrives extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchDrives();
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
        fetching: state.drives.fetching,
        items: state.drives.drives.items,
        category: state.categories.categories.find(x => x.name === "Drives")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDrives: () => dispatch(fetchDrives()),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemDrives)
