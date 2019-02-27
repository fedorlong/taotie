import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import storeManager from './utils/storeManager';

console.log('process.env: ', process.env);

const { basepath } = '/lt';
console.log('basepath: ', basepath);

const middleware = [thunk];
const store = storeManager.createStore(
  applyMiddleware(...middleware),
);
store.subscribe(() => {
  const t = store.getState();
  console.info(t);
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div className="app">
        <Switch>
          {/* <Route path={`${basepath}/index`} component={App} /> */}
          <App />
        </Switch>
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();