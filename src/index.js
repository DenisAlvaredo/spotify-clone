import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode initialState={initialState} reducer={reducer}>
    <StateProvider>
      <App />

    </StateProvider>
  </React.StrictMode>
);
