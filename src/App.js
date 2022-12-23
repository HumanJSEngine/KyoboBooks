import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "./api/axios";
import requests from "./api/request";
import Header from "./components/Header";
import BookList from "./pages/BookList";
import BookMain from "./pages/BookMain";
import LogIn from "./pages/LogIn";
import Member from "./pages/Member";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import "./App.css";


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
      <Route index element={<About />} />
        <Route path="/booklist" element={<BookList BookList={bookList} />} />
        <Route
          path="/bookmain/:id"
          element={<BookMain BookMain={bookList} />}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/member" element={<Member />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
