import React from 'react';
import { connect } from 'react-redux';

import TerritoryLink from '../territories/TerritoryLink';
import TerritoryTypeLink from '../territoryTypes/TerritoryTypeLink';
import ContinentLink from '../continents/ContinentLink';

import './TerritoryLinks.scss';
import FlagLink from '../flags/FlagLink';

class TerritoryLinks extends React.Component {

    render() {
        const items = [];
        const { territory } = this.props;

        territory.continent && items.push(<ContinentLink continent={territory.continent} key={territory.continent.id} />)

        territory.parent && items.push(<TerritoryLink territory={territory.parent} key={territory.parent.id} />)

        territory.territoryType && items.push(<TerritoryTypeLink territoryType={territory.territoryType} key={territory.territoryType.id} />);

        territory.flag && items.push(<FlagLink flag={territory.flag} key={territory.flag.id} />)

        return (
            <div className="TerritoryLinks">
                {items}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        territory: state.territories.item,
    };
};

export default connect(mapStateToProps)(TerritoryLinks)
