import React from 'react';
import styled from "styled-components";
import bgbg from "./nnbg.jpg"

const Hero3 = () => {
  return (
    <Container>
      <Wrapper>
        <H1>LONG-TERM ASSETS</H1>
        <H5>
        We operate long-term assets and businesses across the globe. This<br/> approach dictates both our investment strategy and our<br/> commitment to environmental, social and governance (ESG)<br/> practices.
        </H5>
        <Button>MORE INSIGHTS</Button>
      </Wrapper>
    </Container>
  )
}

export default Hero3;

const Container = styled.div`
width: 100%;
height: 33vh;
display: flex;
justify-content: center;
align-items: center;
@media Screen and (max-width: 768px){
    height: max-content;
    margin-bottom: 20px;
}
`;
const Wrapper = styled.div`
width: 65%;
height: 95%;
background-image: url(${bgbg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
/* background-color: #F6F7F8; */
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px 35px;

@media Screen and (max-width: 768px){
  align-items: center;
  text-align: center;
  width: 95%;
  height: max-content;
  /* background-image: none; */
/* background-color: #F6F7F8; */
}
/* align-items: center; */
`;
const H1 = styled.div`
font-size: 25px;
font-weight: bold;
color: #012C6D;
margin-bottom: 20px;
`;
const H5 = styled.div`
color: grey;
font-size: 15px;
margin-bottom: 10px;
font-weight: 500;

@media Screen and (max-width: 768px){
  color: black;
}

`;
const Button = styled.div`
padding: 12px 9px;
width: 130px;
background-color: #2671D4;
border-radius: 5px;
margin: 5px 0 0 0;
color: white;
font-size: 12px;
text-align: center;
font-weight: bold;
cursor: pointer;
`;