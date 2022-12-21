/** @format */

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
// axios API
import instance from './api/axios';
import requests from './api/request';
import Header from './components/Header';
import BookList from './pages/BookList';
import BookMain from './pages/BookMain';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  const [bookList, setBookList] = useState([]);
  const fetchData = async () => {
    const resultBookList = await instance.get(requests.bookList);
    setBookList(resultBookList.data.list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<BookList bookList={bookList} />} />
        <Route
          path="/bookmain/:id"
          element={<BookMain BookMain={bookList} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
