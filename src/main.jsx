import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import store from './slices/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
