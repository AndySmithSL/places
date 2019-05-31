import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchTerritory } from '../../../../reducers/territories';
import { FLAG_PATH } from '../../../utils/Global';

import './TerritoryTile.scss';

class TerritoryTile extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchTerritory(id);
        this.props.setCategory(category);
    };

    render() {

        const { territory, category } = this.props;
        const flag = territory && FLAG_PATH + territory.flagImage;
       
        return (
            <div className="TerritoryTile" onClick={ () => this.handleItemClick(category, territory.id) } >
                <div>
                    <img src={flag} className="image" alt={territory.name} />
                </div>
                <div className="details">
                    <div className="title">{territory.name}</div>
                    <div className="subtitle">{territory.fullName}</div>
                </div>
                <div className="left value">
                    {territory.isocode}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Territories')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchTerritory: id => dispatch(fetchTerritory(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TerritoryTile)
