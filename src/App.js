/** @format */

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
// axios API
import instance from "./api/axios";
import requests from "./api/request";
import Header from "./components/Header";
import BookList from "./pages/BookList";
import BookMain from "./pages/BookMain";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  const [bookList, setBookList] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const [indexOfLastPost, setindexOfLastPost] = useState(0);
  const [indexOfFirstPost, setindexOfFirstPost] = useState(0);
  const [currentPost, setcurrentPost] = useState(0);
  const [bookDetail, setBookDetail] = useState([]);
  
  const fetchData = async () => {
    const resultBookList = await instance.get(requests.bookList);
    setBookList(resultBookList.data.list);
    const resultBookDetail = await instance.get(requests.bookDetail);
    setBookDetail(resultBookDetail.data.list);
  };

  useEffect(() => {
    fetchData();
    setindexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfFirstPost, indexOfLastPost, items, postPerPage], []);

  const setPage = (e) => {
    setCurrentPage(e);
  };
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<BookList bookList={bookDetail} />} />
        <Route
          path="/bookmain/:id"
          element={<BookMain BookMain={bookList} />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
