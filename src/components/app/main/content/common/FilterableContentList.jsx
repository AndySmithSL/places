import React from 'react';
import ContentSearchBar from './ContentSearchBar';
import ContentList from './ContentList';

import './FilterableContentList.scss';

export const FilterableContentList = (props) => {
    return (
        <div className="FilterableContentList">
            <ContentSearchBar onFilterTextChange={props.onFilterTextChange} />
            <ContentList items={props.items} />
        </div>
    )
};
