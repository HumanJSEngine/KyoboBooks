/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

const margin = { margin: 5 };
const paymentImg = { width: 18, height: 23, margin: 3, background: 0 };
const paymentTxt = { background: 0 };

const BookMain = (props) => {
  const params = useParams();
  const data = parseInt(params.id);
  const [book, setBook] = useState([]);

  useEffect(() => {
    props.BookMain.find((item) => {
      if (item.biSeq === data) {
        setBook(item);
      }
    });
  }, [data, props.BookMain]);

  const cal = (a) => {
    return a * 0.9;
  };

  const saleCal = (a, b) => {
    return a * b;
  };

  const date = new Date().getDate() + 1;
  const Month = new Date().getMonth() + 1;
  const Year = new Date().getFullYear();

  return (
    <div>
      <Wrapper>
        <Left>
          <span className="bookTitle">{book.biTitle}</span>
          <span className="bookSubtitle">{book.biSubTitle}</span>
          <span className="author">{book.biAuthor}</span>
          <Info>
            <span className="publish">{book.biPublisher}</span>
            <span className="release">{book.biPublicDt}</span>
          </Info>
          <article className="bookImage">
            <img
              className="bookPicture"
              src={`http://192.168.0.111:9988/api/image/${book.biIiUri}`}
              alt="{book.biIiFileName}"
            />
          </article>
        </Left>
        <Right>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-primary border border-2"
            >
              {Year}년 {Month}월 {date}일 오늘의 책
            </button>
            <button
              type="button"
              className="btn btn-outline-primary border border-2"
            >
              무료배송
            </button>
            <button
              type="button"
              className="btn btn-outline-success border border-2"
            >
              MD의 선택
            </button>
            <button
              type="button"
              className="btn btn-outline-success border border-2"
            >
              사은품
            </button>
            <button
              type="button"
              className="btn btn-outline-success border border-2"
            >
              소득공제
            </button>
          </div>
          <PriceList>
            <span className="sale">10%</span>
            <span className="price">
              {cal(book.biPrice)?.toLocaleString()}원
            </span>
            <span className="saledprice">
              {book.biPrice?.toLocaleString()}원
            </span>
          </PriceList>
          <hr />
          <div className="saving">
            <span className="save1">적립/혜택</span>
            <span className="save2">
              {saleCal(book.biPrice, book.biBenefit)?.toLocaleString()}원
            </span>
          </div>
          <hr />
          <div className="delivery">
            <span className="delivery1">배송안내</span>
            <span className="delivery2">
              내일 {Month}월/{date}일, 도착예정
            </span>
          </div>
          <hr />
          <div
            className="btn-group2"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-danger">
              장바구니 담기
            </button>
            <button type="button" className="btn btn-danger">
              바로구매
            </button>
            <button type="button" className="btn btn-outline-danger">
              선물하기
            </button>
            <button type="button" className="btn btn-outline-danger">
              보관함 +
            </button>
          </div>
        </Right>
        <BookInfo>
          <div className="bookpresent">
            <h2>책 소개</h2>
            <span className="bookpresent1">이 책이 속한 분야</span>
            <span className="bookpresent2">
              국내도서 > 청소년 > 청소년 소설
            </span>
            <span className="bookpresent3">국내도서 > 소설 > 영미 소설</span>
          </div>
          <hr />
          <span className="bookintro">{book.biContent}</span>
        </BookInfo>
      </Wrapper>

      <Payment>
        <Title>
          <span className="main">총 상품 금액</span>
          <Price>
            <span className="val">{cal(book.biPrice)?.toLocaleString()}</span>
            <span className="unit"> 원 </span>
          </Price>
        </Title>
        <Button>
          <SpinnerBox>
            <Center>
              <button className="decrease">
                <span className="dec-icon">
                  <img src="/photos/ico_down.png" alt="감소" />
                </span>
              </button>
              <input
                value="1"
                className="spinner-input"
                title="수량"
                autocomplete="off"
              />
              <button className="increase">
                <span className="inc-icon">
                  <img src="/photos/ico_up.png" alt="증가" />
                </span>
              </button>
            </Center>
          </SpinnerBox>
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Large button group"
            style={margin}
          >
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled
            >
              <img src="/photos/ico_heart.png" alt="하트" style={paymentImg} />
              <span style={paymentTxt}></span>
            </button>
          </div>
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Large button group"
            style={margin}
          >
            <button type="button" className="btn btn-outline-warning">
              <img src="/photos/ico_gift.png" alt="선물" style={paymentImg} />
              <span style={paymentTxt}>선물하기</span>
            </button>
          </div>
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Large button group"
            style={margin}
          >
            <button type="button" className="btn btn-secondary">
              장바구니
            </button>
          </div>
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Large button group"
          >
            <button type="button" className="btn btn-outline-danger">
              바로드림
            </button>
            <button type="button" className="btn btn-outline-danger">
              바로구매
            </button>
          </div>
        </Button>
      </Payment>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: snow;
  padding: 2rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem 0;
  > .bookTitle {
    width: 100%;
    height: 30px;
    border-radius: 20px;
    font-size: 2rem;
    font-weight: 600;
  }
  > .bookSubtitle {
    width: 100%;
    height: 30px;
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  > .author {
    font-size: 1.5rem;
    font-weight: 500;
  }
  > .bookImage {
    > .bookPicture {
      width: 550px;
      height: 600px;
      object-fit: contain;
    }
  }
`;

const Info = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  > span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
  > .btn-group {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem 0;
    button {
      font-size: 1rem;
      font-weight: 550;
      white-space: nowrap;
    }
  }

  .saving {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 600;
    .save2 {
      color: green;
    }
  }
  .delivery {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 550;
      font-size: 1.5rem;
    }
  }
  .btn-group2 {
    display: flex;
    gap: 0 1rem;
    justify-content: space-between;
    button {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const PriceList = styled.div`
  display: flex;
  gap: 0 1rem;

  .sale {
    color: green;
    font-weight: 600;
    font-size: 2rem;
  }
  .price {
    font-size: 2rem;
    font-weight: 600;
  }
  .saledprice {
    font-size: 1.5rem;
    text-align: end;
    text-decoration: line-through;
    padding-top: 0.5rem;
  }
`;

const BookInfo = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  text-align: left;
  font-size: 1.5rem;
  padding-top: 2rem;
  .bookpresent {
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
  }
`;

const Payment = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0 20px;
  border-top: 1px solid #ccc;
`;

const Title = styled.div`
  display: flex;
  width: 250px;
  line-height: 60px;
  > .main {
    margin-right: 30px;
    font-size: 18px;
    letter-spacing: -0.01em;
    font-weight: 500;
    vertical-align: top;
  }
`;
const Price = styled.div`
  display: flex;
  > .val {
    font-size: 26px;
    letter-spacing: -0.01em;
    font-weight: 700;
  }
  > .unit {
    font-size: 26px;
    letter-spacing: -0.01em;
  }
`;

const Button = styled.div`
  position: relative;
  display: flex;
`;

const SpinnerBox = styled.div`
  display: block;
  margin-right: 25px;
`;

const Center = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 0;
  vertical-align: middle;
  margin: 10px 0;
  > .decrease {
    display: block;
    width: 34px;
    height: 44px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
    cursor: pointer;
    border-right: none;
    border-radius: 6px 0 0 6px;
    > .dec-icon {
      img {
        width: 12px;
        height: 12px;
        background-size: 12px 12px;
        background: transparent;
        text-align: center;
      }
    }
  }
  > .spinner-input {
    width: 36px;
    height: 44px;
    margin: 0;
    padding: 1px 0 0 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: none;
    border-right: none;
    color: #000;
    background-color: #fff;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    box-sizing: border-box;
  }
  > .increase {
    display: block;
    width: 34px;
    height: 44px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
    cursor: pointer;
    border-left: none;
    border-radius: 0 6px 6px 0;
    > .inc-icon {
      img {
        width: 12px;
        height: 12px;
        background-size: 12px 12px;
        background: transparent;
        text-align: center;
      }
    }
  }
`;

export default BookMain;
