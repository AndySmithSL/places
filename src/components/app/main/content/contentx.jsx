import React from 'react';
import { ContentHeader } from './common/ContentHeader';
import ContentHome from './home/ContentHome';
import ContentContinents from './continents/ContentContinents';
// import ContentTerritoryTypes from './contentMain/content-territory-types';
// import ContentTerritories from './contentMain/content-territories';

import './Content.scss';  

class Content extends React.Component {

    render() {
        const { selectedCategory } = this.props;

        return (
            <div className="Content">
                <ContentHeader selectedCategory={selectedCategory} />
                { selectedCategory.name === 'Home' && <ContentHome /> }
                { selectedCategory.name === 'Continents' && <ContentContinents category={selectedCategory} /> }
                {/* { selectedCategory.name === 'Territory Types' && <ContentTerritoryTypes category={selectedCategory} /> }
                { selectedCategory.name === 'Territories' && <ContentTerritories category={selectedCategory} /> } */} 
            </div>
        );
    }
}

export default Content;
