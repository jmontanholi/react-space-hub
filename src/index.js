import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import './index.css';
import NavBar from './components/navBar';
import MyProfile from './components/myProfile';
import RocketsPage from './components/rocketsPage';
import MissionsPage from './components/MissionsPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactRouter>
        <NavBar />
        <Switch>
          <Route path="/missions">
            <MissionsPage />
          </Route>
          <Route path="/profile">
            <MyProfile />
          </Route>
          <Route path="/">
            <RocketsPage />
          </Route>
        </Switch>
      </ReactRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
