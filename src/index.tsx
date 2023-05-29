import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '~app-state/store';
import App from './app';
import './index.scss';

const root = (
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(root, document.getElementById('root') as HTMLElement);
