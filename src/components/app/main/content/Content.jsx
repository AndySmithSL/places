import React from 'react';
import { connect } from 'react-redux';

import { ContentHeader } from './common/ContentHeader';
import ContentContinents from './continents/ContentContinents';
import ContentFlags from './flags/ContentFlags';
import ContentPlaces from './places/ContentPlaces';
import ContentPlaceGroups from './placeGroups/ContentPlaceGroups';
import ContentTerritoryTypes from './territoryTypes/ContentTerritoryTypes';
import ContentTerritories from './territories/ContentTerritories';
import ContentDrives from './drives/ContentDrives';
import ContentRoutes from './routes/ContentRoutes';

import './Content.scss';  
import { Loading } from '../../utils/Loading';
import { HomeContent } from './home/HomeContent';

class Content extends React.Component {

    render() {
        
        const { category } = this.props;

        if(!category) {
            return <Loading />;
        }

        return (
            <div className="Content">
                <ContentHeader selectedCategory={category} />
                { category.name === 'Home' && <HomeContent /> }
                { category.name === 'Continents' && <ContentContinents category={category} /> }
                { category.name === 'Territory Types' && <ContentTerritoryTypes category={category} /> }
                { category.name === 'Territories' && <ContentTerritories category={category} /> } 
                { category.name === 'Places' && <ContentPlaces category={category} /> } 
                { category.name === 'Flags' && <ContentFlags category={category} /> } 
                { category.name === 'Place Groups' && <ContentPlaceGroups category={category} /> } 
                { category.name === 'Drives' && <ContentDrives category={category} /> } 
                { category.name === 'Routes' && <ContentRoutes category={category} /> } 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.selectedCategory,
    };
};

export default connect(mapStateToProps)(Content)
