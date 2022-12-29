import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importante no poner la extensión .tsx sino arrojara un error
import {Provider} from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App title="Typescript"/>
  </Provider>, 
  document.querySelector('#root')
);