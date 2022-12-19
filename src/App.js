import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// axios API
import instance from "./api/axios";
import requests from "./api/request";
import Header from "./components/Header";
import BookList from "./pages/BookList";
import BookMain from "./components/BookMain";
import Payment from "./components/Payment";
import NotFound from "./pages/NotFound";
import './App.css';

const App = () => {
  const [bookList, setBookList] = useState([]);
  const fetchData = async () => {
    const resultBookList = await instance.get(requests.fetchBookList);
    setBookList(resultBookList.data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <Router>
      <div className="container">
        <Header />
        <BookMain />
        <Routes>
          <Route path="/bookList" element={<BookList bookList={bookList} />} />
          <Route path="/bookMain" element={<BookMain />} />
          <Route path="/" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
