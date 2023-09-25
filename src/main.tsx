import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/components/theme-provider.tsx';

import App from './App.tsx';

import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
