// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline /> {/* This resets the CSS for a consistent look */}
    <App />
  </React.StrictMode>
);
