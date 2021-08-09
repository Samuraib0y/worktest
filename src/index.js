import './index.css';
import React from 'react';
import store from './redux/redux-store.js'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );



