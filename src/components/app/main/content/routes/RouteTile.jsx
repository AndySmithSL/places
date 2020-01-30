import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchRoute } from '../../../../reducers/routes';

import './RouteTile.scss';

class RouteTile extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchRoute(id);
        this.props.setCategory(category);
    };

    render() {

        const { route, category } = this.props;
       
        return (
            <div className='RouteTile' onClick={ () => this.handleItemClick(category, route.id) } >
                <div>
                    <img src={category.icon} className="image" alt={route.name} />
                </div>
                <div className='details'>
                    <div className='title'>{route.name}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Routes')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchRoute: id => dispatch(fetchRoute(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteTile)
