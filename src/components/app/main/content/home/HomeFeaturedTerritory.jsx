import React from 'react';
import { connect } from 'react-redux';

import { fetchTerritory } from '../../../../reducers/territories';
import { setCategory } from '../../../../reducers/categories';
import { DetailsHeader } from '../common/DetailsHeader';
import { DetailsItem } from '../common/DetailsItem';
import { FLAG_PATH } from '../../../utils/Global';
import { createStringFromList } from '../../../../reducers/commonFunctions';


import './HomeFeaturedTerritory.scss';
import { TerritoryMap } from '../common/TerritoryMap';

class HomeFeaturedTerritory extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.setCategory(category);
        this.props.fetchTerritory(id);
    }

    render() {

        const { fetching, territories, category } = this.props;
        
        if(fetching) {
            return (
                <div className='loading'>LOADING...</div>
            )
        }

        const index = Math.floor((Math.random() * territories.length) + 1);
        const territory = territories[index];
        const flag = territory && FLAG_PATH + territory.flagImage;
        //const territories = place && createStringFromList(place.territories)

        return (
            <div className='HomeFeaturedTerritory'>
                <DetailsHeader label='Featured Territory' icon={category.icon}/>

                { territory &&
                    <div className="FeaturedTerritoryHeader" onClick={ () => this.handleItemClick(category, territory.id) }>
                        { territory.flagImage != '--' &&
                            <div>
                                <img src={flag} className="image" alt={territory.name} />
                            </div>
                        }
                        <div className="label">
                            { territory.name }
                        </div>
                    </div>
                }

                { territory && 
                    <div className='x'>
                        <TerritoryMap item={territory} />
                    </div>
                }

                {/* { place && 
                    <div className='details'>
                        <div className='half'>
                            <DetailsItem label='Local Name' value={place.localName} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Territories' value={territories} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Latitude' value={place.latitudeDegrees} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Longitude' value={place.longitudeDegrees} />
                        </div>
                    </div>
                }  */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        territories: state.territories.items,
        fetching: state.territories.fetchingItems,
        category: state.categories.categories.find(x => x.name === "Territories")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTerritory: id => dispatch(fetchTerritory(id)),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeaturedTerritory)
