import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './App.css';
import './components/ui/bookpage.css';
import './components/ui/modal.css';

import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import Modal from './components/modals/Modal';
import store from './slices/index';
import constants from './constants';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <header>
        <img src="/books-logo.svg" alt="Books logo" className="header-logo" />
        <Link to="/"><h1>Библиотека</h1></Link>
      </header>
      <Modal />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`${constants.LINK_BOOKS}/:id`} element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
