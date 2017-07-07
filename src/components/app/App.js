import React, {Component} from 'react';
import Navbar from './NavBar';
import Routes from './Routes';
import $ from 'jquery';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { ajaxAnimationClass:  '' };

        this.onChange = this.onChange.bind(this);
    }

    onChange(ajaxAnimationClass) {
        this.setState({ ajaxAnimationClass });
    }

    componentDidMount() {
        $(document).ajaxStart(() => this.onChange('fadeIn'));
        $(document).ajaxComplete(() => this.onChange('fadeOut'));
    }

    render() {
        return (
            <div>
                <Navbar animationClass={ this.state.ajaxAnimationClass } />
                <h1 style={ {color: 'red'} }>You can see the described behaviour on Home page (/). On test (/test) you can see my attempt to replicate the issue.Look in the console for further information</h1>
                <main>
                    <Routes/>
                </main>
            </div>
        );
    }
}

