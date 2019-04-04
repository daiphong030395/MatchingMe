import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormSignup from  './Pages/SignUp';
import FormLogin from './Pages/Login';
import Profile from './Pages/Profile';
// import Main from './Pages/Main';
import Table from './Pages/details/Table';
import NotFoundPage from './Pages/NotFoundPage';

import HomePage from './main pages/HomePage';
import ProfilePage from './main pages/ProfilePage';
import Post from './main pages/post-form/NewPostForm';
import TablePost from './main pages/TablePost';
import Forum from './main pages/Forum';
import Help from './main pages/Help';
import Register from './main pages/RegisterForm';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route path='/' exact component={Main} /> */}
        <Route path='/signup' component={FormSignup} />
        <Route path='/register' component={Register} />
        <Route path='/login' component = {FormLogin} />
        <Route path='/tableUser' component={Table} />
        <Route path='/404' component={NotFoundPage} />
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
