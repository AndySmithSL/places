import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { ICON_PATH, ICON_DETAILS } from '../../../utils/Global';

import './FlagDetails.scss';

export const FlagDetails = props => {

    const { flag } = props;
    const icon = ICON_PATH + ICON_DETAILS;

    return (
        <div className='FlagDetails' >
            <DetailsHeader icon={icon} label='Details' />
            <div className="FlagDetailsRow" >
                <div className="FlagDetailsItem whole">
                    <div className="label">DESCRIPTION</div>
                    <div className="value">{ flag ? flag.description : '--' }</div>
                </div>
                <div className="FlagDetailsItem half">
                    <div className="label">ID</div>
                    <div className="value">{ flag ? flag.id : '--' }</div>
                </div>
                <div className="FlagDetailsItem half">
                    <div className="label">CODE</div>
                    <div className="value">{ flag ? flag.code : '--' }</div>
                </div>
                <div className="FlagDetailsItem half">
                    <div className="label">START DATE</div>
                    <div className="value">{ flag ? flag.startDateLabel : '--' }</div>
                </div>
                <div className="FlagDetailsItem half">
                    <div className="label">END DATE</div>
                    <div className="value">{ flag ? flag.endDateLabel : '--' }</div>
                </div>
                <div className="FlagDetailsItem half">
                    <div className="label">TERRITORIES</div>
                    <div className="value">{ flag ? flag.territories ? flag.territories.length : '--' : '--' }</div>
                </div>
            </div>
        </div>
    );
}
