import React from "react";
import { useNavigate } from 'react-router-dom';

const BookList = (props) => {
  const navigate = useNavigate();
  const goBookMain = () => {
    navigate('/bookmain', {replace:true});
  }
  
  // const imgSize = { width: 170, height: 270 };
  const list = props.bookList.map((item, index) => {
    return (
      <div key={index}>
        <div className="col txt-left mb-5">
          <div className="card h-100">
            <img src={item.photo} class="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title mt-2" onClick={goBookMain}>
                <b>{item.title}</b>
              </h5>
              <p className="fs-6">
                {item.niName} · {item.piName}
              </p>
              <p className="fs-5">
                <span class="badge text-bg-success m-2">10%</span>
                {item.biPrice}원
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="mt-4">Boooklsit</h1>
      <div className="row row-cols-4 mt-4 container">{list}</div>
    </div>
  );
};
export default BookList;