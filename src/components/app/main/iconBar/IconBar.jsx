import React from 'react';
import { connect } from 'react-redux';

import { IconBarItem } from './IconBarItem';
import { fetchCategories, fetchCategory } from '../../../reducers/categories';

import './IconBar.scss';

class IconBar extends React.Component {

    render() {

        const iconBarItems = this.props.categories.map(category => {
            return <IconBarItem category={category} handleClick={this.props.fetchCategory} key={category.name} />;
        });

        return (
            <div className="IconBar">
               {iconBarItems}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: name => dispatch(fetchCategory(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconBar)
