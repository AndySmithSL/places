import React from 'react';
import { FLAG_PATH } from '../../../utils/Global';
import './FlagHeader.scss';

export const FlagHeader = props => {

    const image = FLAG_PATH + props.flag.image;

    return (
        <div className="FlagHeader">
            <div>
                { props.flag.image && <img src={image} className="image" alt={props.flag.name} /> }
            </div>
            <div className="label">
                {props.flag.name}
            </div>
            <div className="leftlabel">
                {props.flag.code}
            </div>
        </div>
    )
};
