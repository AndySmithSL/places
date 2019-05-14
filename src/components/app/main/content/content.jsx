import React from 'react';
import { ContentHeader } from './content-header/content-header';
import ContentMain from './content-main/content-main';
import './content.scss';    
import ContentHome from './content-main/content-home';
import ContentContinents from './content-main/content-continents';
import ContentTerritoryTypes from './content-main/content-territory-types';
import ContentTerritories from './content-main/content-territories';







class Content extends React.Component {

    getContent = (category) => {

        switch(category.name) {
            case 'Home':
                return <ContentHome />;
            case 'Continents':
                return <ContentContinents category={category} />;
            case 'Territory Types':
                return <ContentTerritoryTypes category={category} />;
            case 'Territories':
                return <ContentTerritories category={category} />;
            case 'Places':
            case 'Flags':
            case 'Place Groups':
            case 'Drives':
            default:
                return <ContentHome />
        }


    }





    render() {
        const { selectedCategory } = this.props;

        return (
            <div className="content">
                <ContentHeader selectedCategory={selectedCategory} />
                {this.getContent(selectedCategory)}

                {/* <ContentHeader selectedCategory={selectedCategory} />
                <ContentMain selectedCategory={selectedCategory} items={items} /> */}
            </div>
        );
    }



}

export default Content;
