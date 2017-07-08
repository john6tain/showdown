import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import './styles/responsiveform.css';
import './styles/responsiveform1.css';
import './styles/responsiveform2.css';
import './styles/responsiveform3.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
