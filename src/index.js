import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css'
import App from './App';
import {createStore } from 'redux'
import reducer from './reducer/reducer';
import {Provider} from 'react-redux'
//import {createStoreHook, provider} from 'react-redux'
import {composeWithDevTools} from '@redux-devtools/extension'

const store = createStore(reducer, {Products:['1phone11', '1phone12','1phone13'],categories:['mobiles','headphone', 'case']}, composeWithDevTools())

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
