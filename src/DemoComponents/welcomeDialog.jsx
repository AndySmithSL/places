import React from 'react';

function FancyBorder(props) {
    return (
        <div className={props.colour}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder colour="bg-primary">
            <h1>Welcome</h1>
            <p>
                Thank you for visiting our ship!
            </p>
        </FancyBorder>
    );
}

export default WelcomeDialog;
