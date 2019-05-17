import React from 'react';

import './ContentList.scss';

export const ContentList = props => {
    return (
        <div className="ContentList">
            {props.items}
        </div>
    );
}

export default ContentList;
