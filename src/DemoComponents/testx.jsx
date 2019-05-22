import React from 'react';

//const name = 'Jim Beam';
const formatName = (user) => user.firstName + ' ' + user.lastName;

const user = {
    firstName: 'John',
    lastName: 'Smith'
};

const element = <h1>Hello, {formatName(user)}</h1>

function Testx() {
    return element;
};

export default Testx;
