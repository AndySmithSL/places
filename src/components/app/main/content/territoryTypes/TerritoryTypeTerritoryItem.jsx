import React from 'react';
import { connect } from 'react-redux';

import { FLAG_PATH } from '../../../utils/Global';
import { setCategory } from '../../../../reducers/categories';
import { fetchTerritory } from '../../../../reducers/territories';
import { isEmpty } from '../../../../reducers/commonFunctions';

import './TerritoryTypeTerritoryItem.scss';

class TerritoryTypeTerritoryItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchTerritory(id);
        this.props.setCategory(category);
    };

    render() {

        const { territory, flag, category } = this.props;
        console.log(flag);
        const icon = isEmpty(flag) ? category.icon : FLAG_PATH + flag;

        return (
            <div className="TerritoryTypeTerritoryItem" onClick={ () => this.handleItemClick(category, territory.id) } >
                <div>
                    <img src={icon} className="image" alt={territory.name} />
                </div>
                <div className="details quarter">
                    <div className="title">{territory.name}</div>
                </div>
                <div className="details quarter">
                    <div className="title">{ !territory.nativeName ? "--" : territory.nativeName }</div>
                </div>
                <div className="details quarter">
                    <div className="title">{ territory.areaLabel }</div>
                </div>
                <div className="details quarter">
                    <div className="title">{ territory.populationLabel }</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TerritoryTypeTerritoryItem)
