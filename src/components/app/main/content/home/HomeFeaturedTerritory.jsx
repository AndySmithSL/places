import React from 'react';
import { connect } from 'react-redux';

import { fetchTerritory } from '../../../../reducers/territories';
import { setCategory } from '../../../../reducers/categories';
import { DetailsHeader } from '../common/DetailsHeader';
import { DetailsItem } from '../common/DetailsItem';
import { getFullFlagImage } from '../../../utils/ImageDetails';
import { TerritoryMap } from '../common/TerritoryMap';

import './HomeFeaturedTerritory.scss';

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
        const flag = territory && getFullFlagImage(territory.flagImage);

        return (
            <div className='HomeFeaturedTerritory'>
                <DetailsHeader label='Featured Territory' icon={category.icon}/>

                { territory &&
                    <div className='FeaturedTerritoryHeader' onClick={ () => this.handleItemClick(category, territory.id) }>
                        { territory.flagImage != "--" &&
                            <div>
                                <img src={flag} className='imagex' alt={territory.name} />
                            </div>
                        }
                        <div className='details'>
                            <div className='title'>
                                {territory.name}
                            </div>
                            <div className='subtitle'>
                                {territory.partOf}
                            </div>
                        </div>
                    </div>
                }

                { territory && 
                    <div className='map'>
                        <TerritoryMap item={territory} />
                    </div>
                }

                { territory && 
                    <div className='details'>
                        <div className='half'>
                            <DetailsItem label='Local Name' value={territory.nativeName} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Part of' value={territory.partOf} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Area' value={territory.areaLabel} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Population' value={territory.populationLabel} />
                        </div>
                    </div>
                }
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
