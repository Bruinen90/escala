import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import App from './containers/App/App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { LocalizeProvider } from 'react-localize-redux';

ReactDOM.render(
    <LocalizeProvider>
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </LocalizeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
