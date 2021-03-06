import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import './index.css';
import reducer from './reducers';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

ReactDOM.render((
        <Provider store={store}>
            <App/>
        </Provider>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();