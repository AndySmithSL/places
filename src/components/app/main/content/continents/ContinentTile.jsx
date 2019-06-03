import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchContinent } from '../../../../reducers/continents';

import './ContinentTile.scss';

class ContinentTile extends React.Component {

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
            <div className="ContinentTile" onClick={ () => this.handleItemClick(category, item.id) } >
                <div>
                    <img src={category.icon} className="image" alt={item.name} />
                </div>
                <div className="details">
                    <div className="title">{item.name}</div>
                    <div className="subtitle">{item.code}</div>
                </div>
                <div className="left value">
                    {item.listValue}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContinentTile)
