import React, {Component} from 'react';
import Navbar from './NavBar';
// import Footer from './Footer';
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
                <main>
                    <Routes/>
                </main>
            </div>
        );
    }
}

