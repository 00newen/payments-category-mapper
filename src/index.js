import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { LocalStorageProvider } from './helpers/LocalStorageContext';
import ErrorPage from './error-page';
import PaymentsCategoryMapper from './App';
import Home from 'pages/Home';
import Instructions from 'pages/Instructions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PaymentsCategoryMapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'instructions',
        element: <Instructions />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalStorageProvider>
      <RouterProvider router={router} />
    </LocalStorageProvider>
  </React.StrictMode>
);
