import React from 'react';
import { Loading } from '../../../utils/Loading';

import '../Content.scss';

class ContentHome extends React.Component {
    render() {
        return (
            <div className="ContentMain">
                <Loading />
            </div>
        );
    }
}

export default ContentHome;
