import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Login, PrivateRoute, Error } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/*
 // @ts-ignore */}
        <PrivateRoute path='/' exact={true}>
          <Dashboard />
        </PrivateRoute>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
