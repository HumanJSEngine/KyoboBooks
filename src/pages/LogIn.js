import React from "react";
import styled from "styled-components";

const LogIn = () => {
  return (
    <Wrapper>
      <ContentsWrap>
        <LogInWrap>
          <div className="form-col-group valid-check fail">
            <div className="col-box id">
              <FormId>
                <input
                  type="email"
                  title="아이디 입력"
                  className="form-ip"
                  placeholder="아이디를 입력해 주세요."
                  style={{
                    border: 0,
                    width: "100%",
                    outline: "none",
                    background: "none",
                  }}
                />
              </FormId>
            </div>
            <div className="col-box pw">
              <FormPw>
                <input
                  type="password"
                  title="비밀번호 입력"
                  className="form-ip"
                  placeholder="비밀번호를 입력해 주세요."
                  style={{
                    border: 0,
                    width: "100%",
                    outline: "none",
                    background: "none",
                  }}
                />
                <Hidden>
                  <img
                    src="/photos/ico_eye.png"
                    alt="숨김"
                    style={{ width: 22, height: 20, cursor: "pointer" }}
                  />
                </Hidden>
              </FormPw>
            </div>
          </div>
          <LogInBt>
            <GrayBt>
              <span className="text">로그인</span>
            </GrayBt>
          </LogInBt>
          <SaveBox>
            <FormChk>
              <button className="save-bt">
                <img
                  src="/photos/ico_checkbox.png"
                  alt="체크"
                  style={{
                    width: 10,
                    height: 7,
                    position: "absolute",
                    left: 6,
                    top: 8,
                  }}
                />
              </button>
              <span className="save-txt">아이디 저장</span>
            </FormChk>
            <span
              className="btn-text-link"
              style={{
                cursor: "pointer",
                fontSize: 14,
                color: "#767676",
                fontWeight: 400,
              }}
            >
              아이디/비밀번호 찾기
            </span>
          </SaveBox>
          <SnsLoginBox>
            <ul className="sns-login-list">
              <li className="sns-login-item">
                <button className="btn-sns-login">
                  <img
                    src="/photos/ico_sns_naver.png"
                    alt="네이버"
                    style={{ width: 42, height: 42 }}
                  />
                </button>
              </li>
              <li className="sns-login-item">
                <button className="btn-sns-login">
                  <img
                    src="/photos/ico_sns_kakao.png"
                    alt="카카오"
                    style={{ width: 42, height: 42 }}
                  />
                </button>
              </li>
              <li className="sns-login-item">
                <button className="btn-sns-login">
                  <img
                    src="/photos/ico_sns_google.png"
                    alt="구글"
                    style={{ width: 42, height: 42 }}
                  />
                </button>
              </li>
            </ul>
            <InfoTxt>
              개인정보 보호를 위해 공용 PC에서 사용 시 SNS계정의 <br />{" "}
              로그아웃 상태를 꼭 확인해 주세요.
            </InfoTxt>
          </SnsLoginBox>
        </LogInWrap>
      </ContentsWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  padding: 50px 0 100px;
  min-height: calc(100vh - 54px - 68px - 250px);
`;
const ContentsWrap = styled.div`
  width: 340px;
  margin: 0 auto;
  padding-top: 0;
`;
const LogInWrap = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #eaeaea;
`;
const FormId = styled.div`
  display: inline-block;
  width: 100%;
  height: 44px;
  padding: 0 14px 2px;
  color: #000;
  font-size: 14px;
  line-height: 42px;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  box-sizing: border-box;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  cursor: text;
`;
const FormPw = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 44px;
  padding: 0 14px 2px;
  color: #000;
  font-size: 14px;
  line-height: 42px;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  box-sizing: border-box;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  cursor: text;
  border-top: none;
  padding: 0 48px 0 14px;
`;
const Hidden = styled.div`
  display: inline-block;
  position: absolute;
  right: 14px;
  top: 0px;
  width: 22px;
  height: 20px;
  background-size: 22px 20px;
`;
const LogInBt = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const GrayBt = styled.div`
  line-height: 50px;
  color: #fff;
  background: #767676;
  border: 1px solid #767676;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
const SaveBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const FormChk = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  min-height: 22px;
  vertical-align: top;
  > .save-bt {
    background-color: #fff;
    border: 1px solid #ccc;
    width: 22px;
    height: 22px;
    text-align: center;
    border-radius: 50%;
    box-sizing: border-box;
  }
  > .save-txt {
    display: inline-block;
    position: relative;
    padding-left: 7px;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    cursor: pointer;
    vertical-align: top;
  }
`;
const SnsLoginBox = styled.div`
  margin-top: 40px;
  > .sns-login-list {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 0;
    .btn-sns-login {
      border: 0;
      background: transparent;
    }
  }
`;
const InfoTxt = styled.div`
  margin-top: 18px;
  color: #767676;
  font-size: 14px;
`;

export default LogIn;
