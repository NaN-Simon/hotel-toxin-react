import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
