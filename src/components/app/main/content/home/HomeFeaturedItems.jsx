import React from 'react';

import HomeFeaturedPlace from './HomeFeaturedPlace';
import HomeFeaturedTerritory from './HomeFeaturedTerritory';
import HomeFlagsOnDay from './HomeFlagsOnDay';

import './HomeFeaturedItems.scss';

export const HomeFeaturedItems = () => {
    return (
        <div className="HomeFeaturedItems">
            <div className='item'>
                <HomeFeaturedTerritory />
            </div>
            <div className='item'>
                <HomeFeaturedPlace />
            </div>
            <div className='item'>
                <HomeFlagsOnDay />
            </div>
        </div>
    );
}
