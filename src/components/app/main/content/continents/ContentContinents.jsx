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



    // render() {
    //     return (
    //         <div className="ContentMain">
    //             <ListContinents handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
    //             <DashboardContinent item={this.props.continent} icon={this.props.category.icon} /> 
    //         </div>
    //     );
    // }


// const mapStateToProps = state => {
//     return {
//         isFetching: state.continents.isFetching,
//         continents: state.continents.items,
//         filter: state.continents.filter,
//         continentId: state.continents.continentId,
//         continent: state.continents.continent
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchContinents: url => dispatch(fetchContinents()),
//         fetchContinent: id => dispatch(fetchContinent(id)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContentContinents)
