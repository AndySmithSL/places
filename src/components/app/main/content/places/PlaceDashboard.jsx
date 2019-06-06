import React from 'react';
import { connect } from 'react-redux';


import { ICON_PATH, ICON_MAP } from '../../../utils/Global';
// import { ContinentMap } from './ContinentMap';
// import { ContinentDetails } from './ContinentDetails';
// import { ContinentTerritories } from './ContinentTerritories';
// import { ContinentSubdivisons } from './ContinentSubdivisions';


//import { ContinentPieChart } from './ContinentPieChart';

import './PlaceDashboard.scss';
import { PlaceHeader } from './PlaceHeader';
import PlaceLinks from './PlaceLinks';
import { PlaceDetails } from './PlaceDetails';
import { PlaceMap } from './PlaceMap';


class PlaceDashboard extends React.Component {

    render() {

        const { fetching, item, category } = this.props;
        const icon = ICON_PATH + ICON_MAP;

        if(fetching) {
            return (
                <div className="PlaceDashboard">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="PlaceDashboard">
                <PlaceHeader place={item} />
                <PlaceLinks />

                <div className="row">
                    <div className="row third">
                        <PlaceDetails item={item} />
                    </div>
                    <div className="row twothirds">
                        <PlaceMap place={item} label='Map' icon={ICON_PATH + ICON_MAP} />
                    </div>
                </div>

    
                {/* <div className="row" >
                    <div className="row two-thirds">
                        <div className="half">
                            <ContinentDetails item={item} />
                        </div>
                        <div className="half">
                            <ContinentMap item={item} label='Map' icon={icon} />
                        </div>
                        <div className="half">
                            <ContinentPieChart item={item} label='Map' icon={icon} />
                        </div>
                        <div className="half">
                            <ContinentSubdivisons item={item} />
                        </div>
                        
                        
                        
                        <DetailsContinent item={props.item} label='Details' icon='../assets/info.png' size='half' />
                        { props.item.children.length > 0 && <Subdivisons item={props.item} label='Subdivisons' icon='../assets/america.png' size='half' /> }         
                        { props.item.parent && <DetailsContinent item={props.item.parent} label='Parent' icon='../assets/america.png' size='half' /> } 
                        { props.item.children.length > 0 && <PieChartContinent item={props.item} label='Sub-continents' icon='../assets/map.png' size='half' /> }
                    </div>
                    <div className="row third">
                        <ContinentTerritories continent={item} />
                    </div>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.places.place.fetching,
        item: state.places.place.item,
        category: state.categories.categories.find(x => x.name === 'Places')
    };
};

export default connect(mapStateToProps)(PlaceDashboard)
