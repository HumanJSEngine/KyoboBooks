import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [count, setCount] = useState(1);
  const [postPerPage] = useState(8);

  const [indexOfLastPost, setindexOfLastPost] = useState(0);
  const [indexOfFirstPost, setindexOfFirstPost] = useState(0);
  const [currentPost, setcurrentPost] = useState(0);

  const fetchData = async () => {
    const resultBookList = await instance.get(requests.fetchBookList);
    setBookList(resultBookList.data);
  };

  useEffect(() => {
    fetchData();
    setindexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<BookList bookList={bookList} />}></Route>
        <Route path="/bookmain" element={<BookMain />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
