import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/privateRoute';
import LoginPage from '../pages/auth/LoginPage';
import HomePage from '../pages/home/HomePage';
import MainLayout from './../layout/MainLayout';

export default (props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <MainLayout>
        <PrivateRoute exact path="/home" component={HomePage} />
      </MainLayout>      
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);