import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchContinent } from '../../../../reducers/continents';

import './ContinentDetailsParent.scss';

class ContinentDetailsParent extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchContinent(id);
        this.props.setCategory(category);
    };

    render() {

        const { item, category } = this.props;

        return (
            <div className="ContinentDetailsParent half" onClick={ () => this.handleItemClick(category, item.id) }>
                <div className="label">PARENT</div>
                <div className="value">{ item ? item.name : '--' }</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Continents')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchContinent: id => dispatch(fetchContinent(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContinentDetailsParent)


