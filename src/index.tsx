import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  AuthProvider  from './contexts/Auth/AuthProvider';
import ThemeProvider from "./contexts/Theme/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

