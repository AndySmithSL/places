import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchFlag } from '../../../../reducers/flags';
import { getFullFlagImage } from '../../../utils/ImageDetails';

import './FlagTile.scss';

class FlagTile extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchFlag(id);
        this.props.setCategory(category);
    };

    render() {

        const { flag, category } = this.props;
        const flagImage = flag && getFullFlagImage(flag.image);
       
        return (
            <div className='FlagTile' onClick={ () => this.handleItemClick(category, flag.id) } >
                <div>
                    <img src={flagImage} className='image' alt={flag.name} />
                </div>
                <div className='details'>
                    <div className='title'>{flag.name}</div>
                    <div className='subtitle'>{flag.description}</div>
                </div>
                <div className='left value'>
                    {flag.code}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === "Flags")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchFlag: id => dispatch(fetchFlag(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlagTile)
