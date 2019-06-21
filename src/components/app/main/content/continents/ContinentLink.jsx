import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchContinent } from '../../../../reducers/continents';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './ContinentLink.scss';

class ContinentLink extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchContinent(id);
        this.props.setCategory(category);
    };

    render() {

        const { continent, category } = this.props;
       
        return (
            <div className="ContinentLink" onClick={ () => this.handleItemClick(category, continent.id) } >
                <div>
                    <img src={category.icon} className="image" alt={continent.name} />
                </div>
                <div className="details">
                    <div className="title">{continent.name}</div>
                </div>
                <div>
                    <img src={getFullPathImage("forward")} className="arrow" alt='arrow' />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContinentLink)
