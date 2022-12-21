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

  const fetchData = async () => {
    const resultBookList = await instance.get(requests.fetchBookList);
    setBookList(resultBookList.data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<BookList bookList={bookList} />} />
        <Route path="/bookmain" element={<BookMain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Payment />
    </div>
  );
};
export default App;
