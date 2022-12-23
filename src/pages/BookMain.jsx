/** @format */

import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const margin = { margin: 5 };
const paymentImg = { width: 18, height: 23, margin: 3, background: 0 };
const paymentTxt = { background: 0 };

const BookMain = (props) => {
  const [x, setX] = useState(1);
  const params = useParams();
  const data = parseInt(params.id);
  const [book, setBook] = useState([]);
  const clock = useRef(null);
  const bell = useRef(null);
  const bookmark = useRef(null);
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    Lottie.loadAnimation({
      container: clock.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/clock.json'),
    });
  }, []);

  useEffect(() => {
    Lottie.loadAnimation({
      container: bell.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/bell.json'),
    });
  }, []);

  useEffect(() => {
    Lottie.loadAnimation({
      container: bookmark.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/bookmark.json'),
    });
  }, []);

  useEffect(() => {
    props.BookMain.find((item) => {
      if (item.biSeq === data) {
        setBook(item);
      }
    });
  }, [data, props.BookMain]);

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const handlePlus = () => setX(x + 1);
  const handleMinus = () => {
    if (x === 1) return;
    setX(x - 1);
  };

  const cal = (a) => {
    return a * 0.9;
  };

  const saleCal = (a, b) => {
    return a * b;
  };

  const date = new Date().getDate();
  const Month = new Date().getMonth() + 1;
  const Year = new Date().getFullYear();

  return (
    <div>
      <Wrapper>
        <Left>
          <span className="bookTitle">{book.biTitle}</span>
          <span className="subandauthor">
            <span className="bookSubtitle">{book.biSubTitle}</span>&nbsp;&nbsp;
            <span className="author">{book.biAuthor}</span>
          </span>
          <article className="bookImage">
            <img
              className="bookPicture"
              src={`http://192.168.0.111:9988/api/image/${book.biIiUri}`}
              alt="{book.biIiFileName}"
            />
          </article>
          <Info>
            <span className="publish">{book.biPublisher}</span>
            <span className="release">{book.biPublicDt}</span>
          </Info>
        </Left>
        <Right>
          <div
            className="btn-group mainbuttons"
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
            <span class="salerate">
              {book.biDiscount * 100}%{' '}
              <span>{book.biPrice?.toLocaleString()}원</span>
            </span>
            <span className="saleprice">
              정가 {cal(book.biPrice)?.toLocaleString()}원
            </span>
            <span className="saleprice2">
              할인특가 {(book.biPrice * 0.1)?.toLocaleString()}원
            </span>
          </PriceList>
          <hr />
          <div className="saving">
            <span className="save1">적립/혜택</span>
            <span className="save2">
              {saleCal(book.biPrice, book.biBenefit)?.toLocaleString()}P
            </span>
          </div>
          <hr />
          <div className="deliveryset">
            <div className="delivery">
              <span className="delivery1">무료배송</span>
              <span className="delivery2">
                <span>
                  내일 {Month}월/{date}일, 도착보장
                </span>
              </span>
              <span className="remaintime">
                ({hour < 10 ? '0' + hour : hour}:
                {minute < 10 ? '0' + minute : minute}:
                {second < 10 ? '0' + second : second} 내 주문시 / 수도권 기준)
              </span>
            </div>
            <div className="clock" ref={clock}></div>
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
            <button type="button" className="btn btn-outline-secondary">
              선물하기
            </button>
            <button type="button" className="btn btn-outline-secondary">
              보관함 +
            </button>
          </div>
          <hr />
          <Noticelist>
            <div className="alarmlist">
              <span className="alarminfo">
                알림 신청하시면 원하시는 정보를
                <br />
                받아 보실 수 있습니다.
              </span>
              <button className="alarmbtn">
                <div className="bell" ref={bell}></div>
                <span className="text">알림신청</span>
              </button>
            </div>
            <div className="infotext">
              <div className="bookmark" ref={bookmark}></div>
              <span className="bialarm">
                {book.biAlarm ? book.biAlarm : 'DB가 없습니다'}
              </span>
            </div>
            <button className="marketplace">
              <img src="/photos/marketplace.png" alt="" />
              매장 재고 위치
            </button>
          </Noticelist>
        </Right>
        <BookInfo>
          <div className="bookpresent">
            <h2>책 소개</h2>
            <span className="bookpresent1">이 책이 속한 분야</span>
            <span className="bookpresent2">국내도서 청소년 청소년 소설</span>
            <span className="bookpresent3">국내도서 소설 영미 소설</span>
          </div>
          <hr />
          <span className="bookintro">
            {book.biContent ? book.biContent : 'DB가 없읍니다'}
          </span>
        </BookInfo>
      </Wrapper>
      <Wrapper2>
        <Payment>
          <Title>
            <span className="main">총 상품 금액</span>
            <Price>
              <span className="val">
                {cal(book.biPrice * x)?.toLocaleString()}
              </span>
              <span className="unit"> 원 </span>
            </Price>
          </Title>
          <Button>
            <CountBoxWrap>
              <CountBox>
                <button onClick={handleMinus} className="dec-btn">
                  <span className="dec-icon">
                    <img src="/photos/ico_down.png" alt="감량" />
                  </span>
                </button>
                <input
                  value={x}
                  className="conut-input"
                  title="수량"
                  autocomplete="off"
                />
                <button onClick={handlePlus} className="inc-btn">
                  <span className="inc-icon">
                    <img src="/photos/ico_up.png" alt="증량" />
                  </span>
                </button>
              </CountBox>
            </CountBoxWrap>
            <NavLink to="/login">
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
                  <img
                    src="/photos/ico_heart.png"
                    alt="하트"
                    style={paymentImg}
                  />
                  <span style={paymentTxt}></span>
                </button>
              </div>
            </NavLink>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
            <div
              className="btn-group btn-group-lg"
              role="group"
              aria-label="Large button group"
              style={margin}
            >
              <button type="button" className="btn btn-warning">
                <img src="/photos/ico_gift.png" alt="선물" style={paymentImg} />
                <span style={paymentTxt}>선물하기</span>
              </button>
            </div>
            </NavLink>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
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
            </NavLink>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
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
            </NavLink>
          </Button>
        </Payment>
      </Wrapper2>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.5rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem 0;

  > .bookTitle {
    width: 100%;
    height: 30px;
    border-radius: 20px;
    font-size: 2rem;
    font-weight: 600;
    white-space: nowrap;
  }
  > .subandauthor {
    display: flex;
    justify-content: center;
    span {
      font-size: 20px;
      white-space: nowrap;
    }
  }
  > .bookImage {
    > .bookPicture {
      width: 700px;
      height: 900px;
      object-fit: contain;
    }
  }
`;

const Info = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  > .mainbuttons {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
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

  .deliveryset {
    display: flex;
    justify-content: space-between;
    .delivery {
      display: flex;
      flex-direction: column;
      text-align: left;
      .delivery1 {
        font-size: 1.5rem;
        font-weight: 600;
      }
      .delivery2 {
        font-weight: 600;
        font-size: 1.5rem;
        color: green;
        display: flex;
      }
      .remaintime {
        color: black;
        font-size: 1.5rem;
      }
    }
    .clock {
      svg {
        width: 120px !important;
        height: 120px !important;
      }
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
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  letter-spacing: 2px;
  .salerate {
    font-size: 1.5rem;
    > span {
      font-size: 1.5rem;
      text-decoration: line-through;
      color: gray;
    }
  }
  .saleprice {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .saleprice2 {
    font-size: 2rem;
    font-weight: 600;
    color: #df1212
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  border-top: 1px solid gray;
  grid-column: 1/3;
  grid-row: 2/3;
  text-align: left;
  font-size: 1.5rem;
  padding: 30px 80px;
  .bookpresent {
    margin: 5rem 0;
    display: flex;
    gap: 5rem 0;
    flex-direction: column;
  }
  .bookintro {
    margin-top: 5rem;
  }
`;

const Wrapper2 = styled.div`
  margin-top: 150px;
  
`;

const Payment = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 120px;
  border-top: 1px solid #ccc;
`;

const Title = styled.div`
  display: flex;
  width: 250px;
  line-height: 60px;
  align-items: center;
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
  cursor: pointer;
  align-items: center;
`;

const CountBoxWrap = styled.div`
  display: block;
  margin-right: 25px;
`;

const CountBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 0;
  vertical-align: middle;
  margin: 10px 0;
  > .dec-btn {
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
  > .conut-input {
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
  > .inc-btn {
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

const Noticelist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;
  .alarmlist {
    display: flex;
    justify-content: space-between;
    .alarminfo {
      text-align: left;
    }
  }
  .alarmbtn {
    border: 3px solid #474c98;
    border-radius: 10px;
    color: #474c98;
    background: none;
    display: flex;
    padding: 5px;
    > .bell {
      svg {
        width: 40px !important;
        height: 40px !important;
      }
    }
    > .text {
      font-size: 1rem;
      padding-top: 8px;
    }
  }
  .infotext {
    width: 100%;
    height: 120px;
    background-color: rgb(252, 248, 248);
    border-radius: 20px;
    display: flex;
    padding: 1.5rem;
    .bookmark {
      svg {
        width: 80px !important;
        height: 80px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }
    }
    .bialarm {
      color: #474c98;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .marketplace {
    border: 3px solid rgb(220, 214, 214);
    background: none;
    border-radius: 10px;
    padding: 10px;
  }
`;

export default BookMain;
