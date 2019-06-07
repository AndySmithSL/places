import React from 'react';
import { connect } from 'react-redux';

import { DashboardHeader } from '../common/DashboardHeader';
import { ICON_PATH, ICON_MAP } from '../../../utils/Global';
import { ContinentMap } from './ContinentMap';
import { ContinentDetails } from './ContinentDetails';
import { ContinentTerritories } from './ContinentTerritories';
import { ContinentSubdivisons } from './ContinentSubdivisions';

import './ContinentDashboard.scss';
import { ContinentPieChart } from './ContinentPieChart';


class ContinentDashboard extends React.Component {

    render() {

        const { fetching, item, category } = this.props;
        const icon = ICON_PATH + ICON_MAP;

        if(fetching) {
            return (
                <div className="ContinentDashboard">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="ContinentDashboard">
                <DashboardHeader title={item.name} icon={category.icon} />
    
                <div className="row" >
                    <div className="row two-thirds">
                        <div className="half">
                            <ContinentDetails item={item} />
                        </div>
                        <div className="half">
                            <ContinentMap item={item} label='Map' icon={icon} />
                        </div>
                        { item.children.length > 0 && 
                            <div className="half">
                                <ContinentPieChart item={item} label='Map' icon={icon} />
                            </div>
                        }
                        { item.children.length > 0 && 
                            <div className="half">
                                <ContinentSubdivisons item={item} />
                            </div>
                        }
                        
                        {/* <DetailsContinent item={props.item} label='Details' icon='../assets/info.png' size='half' />
                        { props.item.children.length > 0 && <Subdivisons item={props.item} label='Subdivisons' icon='../assets/america.png' size='half' /> }         
                        { props.item.parent && <DetailsContinent item={props.item.parent} label='Parent' icon='../assets/america.png' size='half' /> } 
                        { props.item.children.length > 0 && <PieChartContinent item={props.item} label='Sub-continents' icon='../assets/map.png' size='half' /> }  */}
                    </div>
                    <div className="row third">
                        <ContinentTerritories continent={item} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.continents.continent.fetching,
        item: state.continents.continent.item,
        category: state.categories.categories.find(x => x.name === 'Continents')
    };
};

export default connect(mapStateToProps)(ContinentDashboard)
