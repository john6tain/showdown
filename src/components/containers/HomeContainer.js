import React from 'react';
import Home from '../Home';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greetings: 'Hello'
        }
    }

    render() {
        return (
            <Home prop={ this.state.greetings } />
        )
    }
}