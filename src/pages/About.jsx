/** @format */

import React from 'react';
import Lottie from 'lottie-web';
import { useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const About = () => {
  const about = useRef(null);
  const navigate = useNavigate();
  const goMember = () => {
    navigate('/member');
  }

  useEffect(() => {
    Lottie.loadAnimation({
      container: about.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/about.json'),
    });
  }, []);

  return (
    <>
      <h1 className="mt-4 border border-success border-start-0 border-end-0 p-3 position-relative">
        About
        {/* <Link to="/Member">
          <Button>Member</Button>
        </Link> */}
        <Gomember>
        <button className='goMember' onClick={goMember}>To Member</button>
        </Gomember>
      </h1>
      <h2>미니 프로젝트 "교보문고"</h2>
      <h4> 프론트엔드 : 기획, 디자인, 데이터 불러오기</h4>
      <h4> 백엔드 : 데이터  구조화 및 서버 구축</h4>
      <Container>
        <div className="girl" ref={about}></div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 500px !important;
    height: 500px !important;
  }
`;

const Gomember = styled.span`
.goMember{
  padding:0.8rem;
  font-size: 1.2rem;
  border:1px solid green;
  border-radius: 20px;
  background: green;
  color:white;
  position: absolute;
  right:0%;
}
  
`
export default About;
