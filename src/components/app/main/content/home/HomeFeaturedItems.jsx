import React from 'react';

import HomeFeaturedPlace from './HomeFeaturedPlace';

import './HomeFeaturedItems.scss';

export const HomeFeaturedItems = props => {
    return (
        <div className="HomeFeaturedItems">
            <div className='item'>
                <HomeFeaturedPlace />
            </div>
            <div className='item'>
                {/* <HomeFeaturedPlace /> */}
            </div>
            <div className='item'>
                {/* <HomeFeaturedPlace /> */}
            </div>
        </div>
    );
}
