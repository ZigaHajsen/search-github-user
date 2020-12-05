import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Login, Error } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <Dashboard />
        </Route>
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
