import React from 'react';
import { connect } from 'react-redux';

import { DashboardHeader } from '../common/DashboardHeader';
import { ContinentMap } from './ContinentMap';
import { ContinentDetails } from './ContinentDetails';
import { ContinentTerritories } from './ContinentTerritories';
import { ContinentSubdivisons } from './ContinentSubdivisions';
import { ContinentPieChart } from './ContinentPieChart';
import { ContinentTerritoryAreas } from './ContinentTerritoryAreas';
import { ContinentTerritoryPopulations } from './ContinentTerritoryPopulations';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './ContinentDashboard.scss';


class ContinentDashboard extends React.Component {

    render() {

        const { fetching, item, category } = this.props;

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
                            <ContinentMap item={item} label='Map' icon={ getFullPathImage("world-map") } />
                        </div>
                        { item.children.length > 0 && 
                            <div className="half">
                                <ContinentPieChart continent={item} />
                            </div>
                        }
                        { item.children.length > 0 && 
                            <div className="half">
                                <ContinentSubdivisons item={item} />
                            </div>
                        }
                        {
                            item.children.length === 0 &&
                            <div className='half'>
                                <ContinentTerritoryAreas continent={item} />
                            </div>
                        }
                        {
                            item.children.length === 0 &&
                            <div className='half'>
                                <ContinentTerritoryPopulations continent={item} />
                            </div>
                        }
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
