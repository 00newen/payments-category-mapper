import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LocalStorageProvider } from './helpers/LocalStorageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
  </React.StrictMode>
);
