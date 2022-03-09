import React from 'react';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import PageNotFound from '../components/PageNotFound/PagenotFound';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
