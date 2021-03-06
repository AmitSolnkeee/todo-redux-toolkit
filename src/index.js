import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './store/store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(<BrowserRouter>
 <Provider store={store}>
    <App />
</Provider>
</BrowserRouter>,document.getElementById('root')
);



