import React from 'react';
import { connect } from 'react-redux';

import './DriveLegTile.scss';

class DriveLegTile extends React.Component {

    render() {

        const { driveLeg, category } = this.props;
       
        return (
            <div className='DriveLegTile'>
                <div>
                    <img src={category.icon} className="image" alt={driveLeg.number} />
                </div>
                <div className='details'>
                    <div className='number'>{driveLeg.number}</div>
                    <div className='title'>{driveLeg.origin} to {driveLeg.destination}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Drives')
    };
};

export default connect(mapStateToProps)(DriveLegTile)
