import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { StarAction } from './actions';
import { createStore } from 'redux';
import { star } from './reducers';
import StarContainer from './containers/Star';
import { StoreState } from './types/StoreState';

const store = createStore<StoreState, StarAction, any, any>(star, {
  languageName: 'TypeScript',
  starNum: 1
})


ReactDOM.render(
  <Provider store={store} >
    <StarContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
