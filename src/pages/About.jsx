import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1 className="mt-4 border border-success border-start-0 border-end-0 p-3 position-relative">
        About
        {/* <Link to="/Member">
          <Button>Member</Button>
        </Link> */}
      </h1>
      <h2>미니 프로젝트 "교보문고"</h2>
      <h4> 프론트엔드 : 기획, 디자인, 데이터 불러오기</h4>
      <h4> 백엔드 : "한 작업"</h4>
    </>
  );
};

export default About;
