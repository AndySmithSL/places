import React from 'react';
import { connect } from 'react-redux';

import { fetchFlags, fetchFlag } from '../../../../reducers/flags';
import ListFlags from './ListFlags';
import { DashboardFlag } from './DashboardFlag';

import '../Content.scss';

class ContentFlags extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchFlags();
    }

    handleItemChange = id => {
        this.props.fetchFlag(id);
    }

    render() {

        if(this.props.isFetching) {
            return <div>LOADING...</div>
        }

        return (
            <div className="ContentMain">
                <ListFlags handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
                <DashboardFlag item={this.props.flag} icon={this.props.category.icon} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.flags.isFetching,
        flag: state.flags.flag
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFlags: () => dispatch(fetchFlags()),
        fetchFlag: id => dispatch(fetchFlag(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentFlags)
