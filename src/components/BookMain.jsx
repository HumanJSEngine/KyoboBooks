import React from 'react';

const BookMain = (props) => {
  return (
    <div className="wrapper">
      <div className="left">
        <span className="bookTitle">책제목</span>
        <span className="bookSubtitle">부제</span>
        <article className="bookImage">
          <img className="book-picture" src="/photos/G.jpg" alt="dd" />
        </article>
        <span className="info">
          <span className="author">저자</span>
          <span className="translate">번역</span>
          <span className="publish">출판사</span>
          <span className="release">출시일</span>
        </span>
      </div>
      <div className="right">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">
            오늘의 책
          </button>
          <button type="button" class="btn btn-primary">
            무료배송
          </button>
          <button type="button" class="btn btn-primary">
            사은품
          </button>
          <button type="button" class="btn btn-primary">
            소득공제
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
          <button type="button" class="btn btn-danger">
            알림신청
          </button>
          <button type="button" class="btn btn-warning">
            매장 재고 위치
          </button>
          <button type="button" class="btn btn-success">
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookMain;
