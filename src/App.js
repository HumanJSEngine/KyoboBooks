import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import BookList from './pages/BookList';
import BookMain from './pages/BookMain';
import LogIn from './pages/LogIn';
import Member from './pages/Member';
import NotFound from './pages/NotFound';
import About from './pages/About';
import './App.css';
import axios from 'axios';

const App = () => {
    const [bookList, setBookList] = useState([]);
    const fetchData = async () => {
        const resultData = await axios.get('http://localhost:8000/products');
        setBookList(resultData.data);
        console.log('데이터 확인', bookList);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container'>
            <Header />
            <Routes>
                <Route index element={<About />} />
                <Route
                    path='/booklist'
                    element={<BookList bookList={bookList} />}
                />
                <Route
                    path='/bookmain/:id'
                    element={<BookMain bookList={bookList} />}
                />
                <Route path='/login' element={<LogIn />} />
                <Route path='/member' element={<Member />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};
export default App;
