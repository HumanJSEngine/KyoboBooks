/** @format */

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: rgb(243, 249, 251);
  text-align: center;
  padding: 2rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  gap: 2rem 0;
  > .bookTitle {
    width: 100%;
    height: 50px;
    border-radius: 20px;
  }
  > .bookSubtitle {
    width: 100%;
    height: 50px;
    border-radius: 20px;
  }
  > .bookImage {
    > bookPicture {
      width: 100%;
      object-fit: contain;
    }
  }
`;

const Info = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  span {
    width: 250px;
    height: 100px;
    border-radius: 20px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  height: 100%;
  gap: 1rem;
  > .btn-group {
    width: 100%;
  }
  span {
    text-align: left;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

const BookMain = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <Left>
        <span className="bookTitle">제목</span>
        <span className="bookSubtitle">부제</span>
        <article className="bookImage">
          <img className="bookPicture" src="/photos/G.jpg" alt="dd" />
        </article>
        <Info>
          <span className="author">저자</span>
          <span className="translate">번역</span>
          <span className="publish">출판사</span>
          <span className="release">출시일</span>
        </Info>
      </Left>
      <Right>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-success">
            Left
          </button>
          <button type="button" class="btn btn-outline-success">
            Middle
          </button>
          <button type="button" class="btn btn-outline-success">
            Right
          </button>
        </div>
        <span className="saleprice">할인가격</span>
        <hr />
        <span className="saving">적립/혜택</span>
        <hr />
        <span className="delivery">배송안내</span>
        <hr />
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-outline-success" onClick={goBack}>
            책목록으로
          </button>
          <button type="button" class="btn btn-outline-success">
            매장 재고 위치
          </button>
          <button type="button" class="btn btn-outline-success">
            Right
          </button>
        </div>
      </Right>
    </Wrapper>
  );
};

export default BookMain;
