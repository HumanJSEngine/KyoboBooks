import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paging from "./Paging";

const BookList = (props) => {
  const navigate = useNavigate();
  const goBookMain = () => {
    navigate("/bookmain", { replace: true });
  };

  const list = props.bookList.map((item, index) => {
    return (
      <Link to={`/bookMain/${item.biSeq}`} key={item.biSeq}>
        <div className="col txt-left mb-5">
          <div className="card h-100">
            <img src={item.photo} className="card-img-top" alt={item.biTitle} />
            <div className="card-body bg-wh">
              <div className="card-title mt-2">
                <b className="bg-wh">{item.biTitle}</b>
             </div>
              <p className="fs-6 bg-wh">
                {item.biSubTitle} · {item.biAuthor}
              </p>
              <p className="fs-5 bg-wh">
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
      <Paging />
      {/* <Layout>
        {/* 유저가 페이지 당 표시할 게시물 수 변경 o */}
      {/* <label>
          보기:&nbsp;
          <select
            type="number"
            value={limit}
            onChnage={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="8">8</option>
            <option value="5">5</option>
            <option value="2">2</option>
          </select>
        </label>
      </Layout> */}

      <main>
        <h1 className="mt-4">Boooklsit</h1>
        <div className="row row-cols-4 mt-4 container">{list}</div>
      </main>
    </div>
  );
};

// const Mgzero = styled.mgzero`
//   margin: 0;
// `;
// const Layout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 800px;
//   margin: 0 auto;
// `;

export default BookList;
