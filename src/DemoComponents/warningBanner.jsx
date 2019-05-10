import React from 'react';

function WarningBanner(props) {
    if(!props.warn) {
        //Do not display, return null
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

export default WarningBanner;
