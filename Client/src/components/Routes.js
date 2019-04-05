import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormLogin from './main pages/Login';
import Profile from './main pages/Profile';
import Table from './Pages/details/Table';

import HomePage from './main pages/HomePage';
import ProfilePage from './main pages/ProfilePage';
import Post from './main pages/post-form/CreatePost';
import TablePost from './main pages/TablePost';
import Forum from './main pages/Forum';
import Help from './main pages/Help';
import Register from './main pages/RegisterForm';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route path='/' exact component={Main} /> */}
        <Route path='/signup' component={Register} />
        <Route path='/register' component={Register} />
        <Route path='/login' component = {FormLogin} />
        <Route path='/tableUser' component={Table} />
        <Route path='/404' component={Help} />
        <Route path='/profile1' exact component={Profile} />

        <Route path='/' exact component={HomePage} />
        <Route path='/profile2' exact component={ProfilePage} />
        <Route path='/createPost' exact component={Post} />
        <Route path='/tablePost' component={TablePost} />
        <Route path='/forum' component={Forum} />
        <Route path='/help' component={Help} />

      </Switch>
    );
  }
}

export default Routes;
