import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormSignup from  './Pages/SignUp';
import FormLogin from './Pages/Login';
import Profile from './Pages/Profile';
import Main from './Pages/Main';
import Table from './Pages/details/Table';
import NotFoundPage from './Pages/NotFoundPage';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/signup' component={FormSignup} />
        <Route path='/login' component = {FormLogin} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/table' component={Table} />
        <Route path='/404' component={NotFoundPage} />

      </Switch>
    );
  }
}

export default Routes;
