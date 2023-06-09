import React from 'react';
import styled from "styled-components"
import monee from "./monee.png";
import esg from "./esg.jpg";
import estate from "./estate.jpg";
import invest from "./invest.jpg";
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
          <News img={esg} news="Environmental, Social, and Governance & Investment" date="2ND FEB 2023 | WRITTEN BY ADMIN" desc="ENVIRONMENTAL, SOCIAL, AND GOVERNANCE (ESG) IS A TERM USED TO DESCRIBE THE NON-FINANCIAL ASPECTS OF A COMPANY THAT ARE RELEVANT TO ITS LONG-TERM PERFORMANCE AND VIABILITY...."/>
          <News img={estate} date="1ST FEB 2023 | WRITTEN BY ADMIN" news="Real Estate Investment" desc="REAL ESTATE HAS BEEN A POPULAR INVESTMENT CHOICE FOR CENTURIES, OFFERING POTENTIAL FOR STABLE INCOME AND LONG-TERM GROWTH. IF YOU'RE CONSIDERING INVESTING IN REAL ESTATE, IT'S IMPORTANT TO UNDERSTAND THE BASICS OF..."/>
          <News img={invest} date="1ST FEB 2023 | WRITTEN BY ADMIN" desc="RENEWABLE ENERGY IS A GROWING INDUSTRY THAT HAS THE POTENTIAL TO PROVIDE SUSTAINABLE AND ENVIRONMENTALLY FRIENDLY ENERGY SOURCES. INVESTING IN RENEWABLE ENERGY CAN HELP YOU TO SUPPORT THIS IMPORTANT SECTOR, WHILE ALSO..."/>
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
padding: 20px 0;
margin: 20px 0;

@media Screen and (max-width: 768px){
  height: auto;
}
`;
const Wrapper = styled.div`
width: 70%;
height: 95%;
/* background-color: green; */
padding: 30px 0;
display: flex;
flex-direction: column;
align-items:center;

@media Screen and (max-width: 768px){
  width: 100%;
}
`;
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
height: 15vh;
/* background-color: red; */
align-items: center;

@media Screen and (max-width: 600px){
  flex-direction: column;
}
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

@media Screen and (max-width: 768px){
  flex-direction: column;
  align-items: center;
}
`;

