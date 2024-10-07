import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css'
import App from './App';
import {createStore } from 'redux'
import reducer from './reducer/reducer';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

//import {createStoreHook, provider} from 'react-redux'
import {composeWithDevTools} from '@redux-devtools/extension'

const products = [
  {
    id: 1,
    name: 'iphone11',
    description: 'this is iphone11'
  },
  {
    id: 5,
    name: 'iphone12',
    description: 'this is iphone12'
  },
  {
    id: 3,
    name: 'iphone13',
    description: 'this is iphone13'
  }
]
const store = createStore(reducer, products, composeWithDevTools())

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
