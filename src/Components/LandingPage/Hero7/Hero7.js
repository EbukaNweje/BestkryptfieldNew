import React from 'react';
import styled from "styled-components"
import monee from "./monee.png";
import News from "./News"

const Hero7 = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>News & Analysis</H1>
          <img src={monee} alt='esg'/>
        </Top>
        <Bottom>
          <News/>
          <News/>
          <News/>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Hero7;

const Container = styled.div`
width: 100%;
height: 70vh;
/* background-color:red; */
display: flex;
justify-content: center;
`;
const Wrapper = styled.div`
width: 70%;
height: 95%;
/* background-color: green; */
padding: 30px 0;
display: flex;
flex-direction: column;
align-items:center;
`;
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
height: 15vh;
/* background-color: red; */
align-items: center;
`;
const H1 = styled.div`
font-weight: bold;
font-size: 30px;
color: #012C6D;
`;
const Bottom = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

