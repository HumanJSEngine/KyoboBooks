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

  return (
    <div>
      <h1 className="mt-4">Boooklsit</h1>
      <Mg className="mb-2">
        {getClick}
        <select name="items" onChange={itemChange}>
          <option value="4">4개씩 보기</option>
          <option value="8">8개씩 보기</option>
          <option value="12">12개 보기</option>
        </select>
      </Mg>

      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={data.length - 1}
        pageRangeDisplayed={8}
        onChange={handlePageChange}
      ></Pagination>

      <div className="row row-cols-4 mt-4container ">
        {data
          .slice(items * (page - 1), items * (page - 1) + items)
          .map((item, i) => {
            return (
              <Link
                to={`/bookMain/${item.biSeq}`}
                key={item.biSeq}
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <div className="col txt-left mb-5">
                  <div className="card h-100">
                    <img
                      src={`http://192.168.0.111:9988/api/image/${item.biIiUri}`}
                      className="card-img-top"
                      alt={item.biTitle}
                      // style={{width: 100, height: 100}}
                    />
                    <div className="card-body bg-wh">
                      <div className="card-title mt-2">
                        <b className="bg-wh">{item.biTitle}</b>
                      </div>
                      <p className="fs-6 bg-wh">{item.biAuthor}</p>
                      <p className="fs-6 bg-wh">{item.biPublisher}</p>
                      <p className="fs-5 bg-wh">
                        <span className="badge text-bg-success m-2">10%</span>
                        {item.biPrice}원
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={data.length - 1}
        pageRangeDisplayed={8}
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
};

const Mg = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 60px;
`;
export default BookList;
