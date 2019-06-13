import React from 'react';
import { connect } from 'react-redux';

import { ICON_PATH } from '../../../utils/Global';
import { setCategory } from '../../../../reducers/categories';
import { fetchPlaceGroup } from '../../../../reducers/placeGroups';

import './PlaceGroupTile.scss';

class PlaceGroupTile extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchPlaceGroup(id);
        this.props.setCategory(category);
    };

    render() {

        const { placeGroup, category } = this.props;
        const icon = placeGroup && ICON_PATH + placeGroup.image;

        return (
            <div className="PlaceGroupTile" onClick={ () => this.handleItemClick(category, placeGroup.id) } >
                <div>
                    <img src={icon} className="image" alt={placeGroup.name} />
                </div>
                <div className="details">
                    <div className="title">{placeGroup.name}</div>
                </div>
                <div className="left value">
                    {placeGroup.places}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Place Groups')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchPlaceGroup: id => dispatch(fetchPlaceGroup(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceGroupTile)
