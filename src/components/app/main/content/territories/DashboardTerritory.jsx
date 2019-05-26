import React from 'react';
import { connect } from 'react-redux';

import { Loading } from '../../../utils/Loading';
import { DashboardHeader } from '../common/DashboardHeader';

import '../Content.scss';

class DashboardTerritory extends React.Component {

    render() {

        const { fetching, item, category } = this.props;

        if(fetching) {
            return (
                <div className="ContentMain">
                    <Loading />
                </div>
            );
        }

        return (
            <div className="ContentDashboard">
                <DashboardHeader title={item.name} icon={category.icon} subtitle={item.nativeName} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.territories.fetchingItem,
        item: state.territories.item,
        category: state.categories.categories.find(x => x.name === 'Territories')
    };
};

export default connect(mapStateToProps)(DashboardTerritory)
