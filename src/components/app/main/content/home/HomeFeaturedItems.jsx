import React from 'react';

import HomeFeaturedPlace from './HomeFeaturedPlace';
import HomeFeaturedTerritory from './HomeFeaturedTerritory';

import './HomeFeaturedItems.scss';

export const HomeFeaturedItems = () => {
    return (
        <div className="HomeFeaturedItems">
            <div className='item'>
                <HomeFeaturedPlace />
            </div>
            <div className='item'>
                <HomeFeaturedTerritory />
            </div>
            <div className='item'>
                {/* <HomeFeaturedPlace /> */}
            </div>
        </div>
    );
}
