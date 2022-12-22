import React, { useEffect, useState } from "react";
import axios from "axios";
import instance from "./../api/axios";
import requests from "./../api/request";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import styled from "styled-components";

const BookList = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(8);
  const [search, setSearch] = useState('');
  

  const cal = (a) => {
    return a * 0.9;
  };
  const saleCal = (a, b) => {
    return a * b;
  };

  const fetchData = async () => {
    const resultData = await instance.get(requests.bookList);
    setData(resultData.data.list);
  };
  const getClick = () => {
    axios
      .get("http://192.168.0.111:9988/api/listall/book")
      .then((res) => setData(res.data));
  };
  const handlePageChange = (page) => {
    setPage(page);
  };
  const itemChange = (e) => {
    setItems(Number(e.target.value));
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === ''){
      alert('검색어를 입력하세요');
    }else{
      const filterData = data.filter((row) => row.biTitle.includes(search))
      setData(filterData);
      setPage(1);
    };
    setSearch('')
  }

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className="mt-4 border border-success border-start-0 border-end-0 p-3">
        BookList
      </h1>
      <form onSubmit={e => onSearch(e)}>
        <input type="text" value={search} placeholder='제목을 입력하세요' onChange={onChangeSearch}/>
        <button type='submit'>검색</button>
      </form>
      <Mg className="mb-2 mt-5">
        {getClick}
        <select name="items" onChange={itemChange}>
          <option value="4">4개씩 보기</option>
          <option value="8" selected>
            8개씩 보기
          </option>
          <option value="12">12개씩 보기</option>
        </select>
      </Mg>
      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={data.length - 1}
        pageRangeDisplayed={8}
        onChange={handlePageChange}
      ></Pagination>
      <div className="row row-cols-4 container ">
        {data
          .slice(items * (page - 1), items * (page - 1) + items)
          .map((item, i) => {
            return (
              <Link
                to={`/bookMain/${item.biSeq}`}
                key={item.biSeq}
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <div className="col txt-left mb-5" style={{ height: 620 }}>
                  <div className="card h-100">
                    <div className="embed-responsive embed-responsive-4by3 ">
                      <img
                        src={`http://192.168.0.111:9988/api/image/${item.biIiUri}`}
                        className="card-img-top embed-responsive-item"
                        alt={item.biTitle}
                        style={{ height: 370 }}
                      />
                    </div>
                    <div className="card-body bg-wh">
                      <div className="card-title fs-5 mt-2 ms-2">
                        <b className="bg-wh">{item.biTitle}</b>
                      </div>
                      <p className="fs-6 bg-wh ms-2">
                        {item.biAuthor}
                        <br />
                        {item.biPublisher}
                      </p>
                      <p className="fs-6 bg-wh">
                        <span className="badge text-bg-success m-2">10%</span>
                        {cal(item.biPrice)?.toLocaleString()}원{" "}
                        <span className="text-secondary fs-6">
                          (
                          {saleCal(
                            item.biPrice,
                            item.biBenefit
                          )?.toLocaleString()}
                          P)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

const Mg = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 60px;
`;

export default BookList;
