import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from "react-redux/es/components/Provider";
import MemoStore from "./memo/Store";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={MemoStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();