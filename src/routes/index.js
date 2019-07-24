import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Meetup from '~/pages/Meetup';
import Profile from '~/pages/Profile';
import Create from '~/pages/Create';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/create" component={Create} isPrivate />
      <Route path="/meetup/:id" component={Meetup} isPrivate />
    </Switch>
  );
}
