import React from 'react';

import { Loading } from '../../../utils/Loading';


import { FlagHeader } from './FlagHeader';

import './DashboardFlag.scss';
import { FlagDetails } from './FlagDetails';
import { FlagImage } from './FlagImage';
import { FlagTerritories } from './FlagTerritories';

export const DashboardFlag = props => {

    if(!props.item) {
        return <Loading />;
    }

    return (
        <div className="DashboardFlag">
            <FlagHeader flag={props.item} />
            <div className="DashboardFlagRow" >
                <div className="third" >
                    <FlagDetails flag={props.item} />
                </div>
                <div className="third" >
                    <FlagImage flag={props.item} />
                </div>
                <div className="third" >
                    <FlagTerritories flag={props.item} />
                </div>
            </div>
        </div>
    );
}
