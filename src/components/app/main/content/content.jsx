import React from 'react';
import { ContentTitle } from './content-header/content-header';
import ContentMain from './content-main/content-main';
import './content.scss';    

class Content extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <div className="content">
                <ContentTitle />
                <ContentMain items={items} />
            </div>
        );
    }
}

export default Content;
