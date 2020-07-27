import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';



ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  // </React.StrictMode>
  
  ,document.getElementById('root')
);
 