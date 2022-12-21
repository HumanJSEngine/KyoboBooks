import React from "react";
import styled from "styled-components";

const margin = { margin: 5 };
const paymentImg = { width: 18, height: 23, margin: 3, background: 0 };
const paymentTxt = { background: 0 };

const Payment = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between
  width: 100%;
  margin: 50px;
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

const payMent = () => {
  return (
    <Payment>
      {/* <div className="count-btn">
        <span className="minus-btn">
          <img src="/photos/ico_down.png" alt="마이너스" style={paymentImg} />
        </span>
        <span className="item-count">1</span>
        <span className="plus-btn">
          <img src="/photos/ico_up.png" alt="플러스" style={paymentImg} />
        </span>
      </div> */}
      <Title>
        <span className="main">총 상품 금액</span>
        <Price>
          <span className="val"> 5,400 </span>
          <span className="unit"> 원 </span>
        </Price>
      </Title>
      <Button>
        <SpinnerBox>
          <Center>
            <button class="decrease">
              <span class="dec-icon">
                <img src="/photos/ico_down.png" alt="감소" />
              </span>
            </button>
            <input
              value="1"
              class="spinner-input"
              title="수량"
              autocomplete="off"
            />
            <button class="increase">
              <span class="inc-icon">
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
          <button type="button" className="btn btn-outline-secondary" disabled>
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
  );
};

export default payMent;
