import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux';
import App from './App';
import { GlobalStyles } from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN!}
      clientId={process.env.REACT_APP_CLIENT_ID!}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
