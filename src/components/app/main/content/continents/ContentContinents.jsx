import React from 'react';
import { connect } from 'react-redux';

import { fetchContinents, fetchContinent } from '../../../../reducers/continents';
import { DashboardContinent } from './DashboardContinent';

import '../Content.scss';
import ListContinents  from './ListContinents';

class ContentContinents extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchContinents();
    }

    handleItemChange = (id) => {
        this.props.fetchContinent(id);
    }

    render() {
        return (
            <div className="ContentMain">
                <ListContinents handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
                <DashboardContinent item={this.props.continent} icon={this.props.category.icon} /> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.continents.isFetching,
        continents: state.continents.items,
        filter: state.continents.filter,
        continentId: state.continents.continentId,
        continent: state.continents.continent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContinents: url => dispatch(fetchContinents()),
        fetchContinent: id => dispatch(fetchContinent(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContinents)
