import React from 'react';

import { ContentHeader } from './common/ContentHeader';
import ContentHome from './home/ContentHome';
import ContentContinents from './continents/ContentContinents';
import ContentTerritoryTypes from './territoryTypes/ContentTerritoryTypes';
import ContentTerritories from './territories/ContentTerritories';

import './Content.scss';  
import ContentFlags from './flags/ContentFlags';

class Content extends React.Component {

    render() {
        const { selectedCategory } = this.props;

        return (
            <div className="Content">
                <ContentHeader selectedCategory={selectedCategory} />
                { selectedCategory.name === 'Home' && <ContentHome /> }
                { selectedCategory.name === 'Continents' && <ContentContinents category={selectedCategory} /> }
                { selectedCategory.name === 'Territory Types' && <ContentTerritoryTypes category={selectedCategory} /> }
                { selectedCategory.name === 'Territories' && <ContentTerritories category={selectedCategory} /> } 
                { selectedCategory.name === 'Flags' && <ContentFlags category={selectedCategory} /> } 
            </div>
        );
    }
}

export default Content;
