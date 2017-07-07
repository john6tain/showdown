import React from 'react';
import Child from './Child';

export default class Parent extends React.Component {
    upVote(arg) {
        console.log('Parent method: ', arg);
    }

    render() {
        console.log('This is my replicate attempt. "Parent" has the role of "ShowdownContainer", "Child" - "Showdown", "GranChild"-"Post');
        return <Child />

    }
}