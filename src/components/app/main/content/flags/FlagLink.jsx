import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchFlag } from '../../../../reducers/flags';
import { getFullPathImage, getFullFlagImage } from '../../../utils/ImageDetails';

import './FlagLink.scss';

class FlagLink extends React.Component {

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
        const icon = flag && getFullFlagImage(flag.image);
       
        return (
            <div className='FlagLink' onClick={ () => this.handleItemClick(category, flag.id) } >
                <div>
                    <img src={icon} className='image' alt={flag.name} />
                </div>
                <div className='details'>
                    <div className='title'>{flag.name}</div>
                </div>
                <div>
                    <img src={getFullPathImage("forward")} className='arrow' alt='arrow' />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Flags')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchFlag: id => dispatch(fetchFlag(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlagLink)
