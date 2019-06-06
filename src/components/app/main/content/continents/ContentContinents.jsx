import React from 'react';
import { connect } from 'react-redux';

import ListContinents  from './ListContinents';

import '../Content.scss';
import ContinentDashboard from './ContinentDashboard';

class ContentContinents extends React.Component {

    render() {

        const { fetching } = this.props;

        if(fetching) {
            return (
                <div className="ContentMain">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="ContentMain">
                <ListContinents />
                <ContinentDashboard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.continents.continents.fetching
    };
};

export default connect(mapStateToProps)(ContentContinents)
