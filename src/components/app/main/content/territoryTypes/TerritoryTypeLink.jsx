import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchTerritoryType } from '../../../../reducers/territoryTypes';
import { ICON_PATH, ICON_ARROW } from '../../../utils/Global';

import './TerritoryTypeLink.scss';

class TerritoryTypeLink extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchTerritoryType(id);
        this.props.setCategory(category);
    };

    render() {

        const { territoryType, category } = this.props;
       
        return (
            <div className="TerritoryTypeLink" onClick={ () => this.handleItemClick(category, territoryType.id) } >
                <div>
                    <img src={category.icon} className="image" alt={territoryType.type} />
                </div>
                <div className="details">
                    <div className="title">{territoryType.type}</div>
                </div>
                <div>
                    <img src={ICON_PATH + ICON_ARROW} className="arrow" alt='arrow' />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Territory Types')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchTerritoryType: id => dispatch(fetchTerritoryType(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TerritoryTypeLink)
