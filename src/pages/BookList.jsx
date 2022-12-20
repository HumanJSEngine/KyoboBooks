import React from "react";
import { Link } from 'react-router-dom';

const BookList = (props) => {
  
  // const imgSize = { width: 170, height: 270 };
  const list = props.bookList.map((item, index) => {
    return (
      <Link to={`/bookMain/${item.biSeq}`} key={item.biSeq}>
        <div className="col txt-left mb-5">
          <div className="card h-100">
            <img src={item.photo} className="card-img-top" alt={item.biTitle} />
            <div className="card-body">
              <div className="card-title mt-2">
                <b>{item.biTitle}</b>
             </div>
              <p className="fs-6">
                {item.biSubTitle} · {item.biAuthor}
              </p>
              <p className="fs-5">
                <span className="badge text-bg-success m-2">10%</span>
                {item.biPrice}원
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <h1 className="mt-4">Boooklsit</h1>
      <div className="row row-cols-4 mt-4 container">
        {list}</div>
    </div>
  );
};
export default BookList;