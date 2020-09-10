import React,{ Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
// adding i18n
import './domain/i18n/i18n';
// adding redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allreducers from './domain/store/Reducers';


const Store = createStore(
  allreducers , 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Suspense fallback={(
    <div>Loading~~~</div>
  )}>
     <Provider store={Store}>
       <App />
     </Provider>
  </Suspense>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
