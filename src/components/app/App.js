import React, {Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Routes from './Routes';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <main>
                    <Routes/>
                </main>
                <Footer/>
            </div>
        );
    }
}

