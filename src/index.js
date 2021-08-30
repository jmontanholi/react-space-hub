import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';
import NavBar from './components/navBar';
import MyProfile from './components/myProfile';

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter>
      <NavBar />
      <Switch>
        <Route path="/profile">
          <MyProfile />
        </Route>
      </Switch>
    </ReactRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
