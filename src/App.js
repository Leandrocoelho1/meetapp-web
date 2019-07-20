import './config/ReactotronConfig';
import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyles from './styles/global';
import Routes from './routes';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={3000} />
          <GlobalStyles />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
