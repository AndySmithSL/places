import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchRouteLeg } from '../../../../reducers/routeLegs';

import './RouteLegTile.scss';

class RouteLegTile extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchRouteLeg(id);
        this.props.setCategory(category);
    };

    render() {

        const { routeLeg, category } = this.props;
    
        return (
            <div className='RouteLegTile' onClick={ () => this.handleItemClick(category, routeLeg.id) } >
                <div>
                <img src={category.icon} className="image" alt={routeLeg.number} />
                </div>
                <div className='details'>
                    <div className='title'>{routeLeg.route}: Leg {routeLeg.number}</div>
                    <div className='subtitle'>{routeLeg.origin} : {routeLeg.destination}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Route Legs')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchRouteLeg: id => dispatch(fetchRouteLeg(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteLegTile)
