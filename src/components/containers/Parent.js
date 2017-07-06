import React from 'react';
import Child from './Child';

export default class Parent extends React.Component {
    upVote(arg) {
        console.log('Parent method: ', arg);
    }

    render() {
        return <Child />

    }
}