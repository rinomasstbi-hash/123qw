// Polyfill `process` for browser environments to prevent crashes.
// This is necessary because some libraries might access process.env, 
// and it's not defined in a standard browser context.
if (typeof process === 'undefined') {
  (window as any).process = {
    env: {}
  };
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
