import React from 'react';

import { HomeItems } from './HomeItems';
import { HomeFeaturedItems } from './HomeFeaturedItems';

import './HomeContent.scss';

export const HomeContent = () => {
    return (
        <div className="HomeContent">
            <div>
                <HomeItems />
            </div>
            <div>
                <HomeFeaturedItems />
            </div>
        </div>
    );
}
