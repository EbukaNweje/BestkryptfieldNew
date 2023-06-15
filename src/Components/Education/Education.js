import React from 'react'
import styled from "styled-components"
import { FaArrowsAltH, FaChartArea, FaChevronRight, FaTools, FaUserFriends, FaUserGraduate} from "react-icons/fa"
import {Link} from "react-router-dom";
import Bgg from "./bgg.jpg"


const Education = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Left>
            <H1>Knowledge is a wise investment</H1>
            <H4>By combining easy-to-understand information with actionable insights, Kryptbase Assets helps make the market seem less daunting—and more approachable.</H4>
            <ButtonHold>
              <Button>Learn</Button>
              <FaArrowsAltH/>
              <Button>Understand</Button>
              <FaArrowsAltH/>
              <Button>Trade</Button>
            </ButtonHold>
          </Left>
          <Right>
            <section>
            <H5>Kryptbase Assets</H5>
            <P>Learn the basic concepts of forex trading, what this market is all about, and why you should be a part of it</P>
            <Getstarted>Get Started</Getstarted>
            </section>
            <IconHold>
              <FaUserGraduate style={{width: 100, height: 100}}/>
            </IconHold>
          </Right>
        </Top>
        <Wrap>
        <Mid>
          <One>
            <div style={{backgroundColor: "#2671D4", color: 'white', borderRadius: "1.5rem", display:"flex", justifyContent: "center", alignItems: "center", width: "60px", height: "60px"}}>
            <FaUserFriends style={{width: 30, height: 30}}/>
            </div>
            <H5>Beginner Course</H5>
          </One>
          <Two>
          Learn the basic concepts of forex trading, what this market is all about, and why you should be a part of it.
          </Two>
          <Three>
            <Enter>Enter Course</Enter>
            <FaChevronRight style={{width: 10, height: 10,}}/>
          </Three>
        </Mid>
        <Line></Line>
        <Mid>
          <One>
            <div style={{backgroundColor: "#2671D4", color: 'white', borderRadius: "1.5rem", display:"flex", justifyContent: "center", alignItems: "center", width: "60px", height: "60px"}}>
            <FaTools style={{width: 30, height: 30}}/>
            </div>
            <H5>Trading Tools</H5>
          </One>
          <Two>
          Familiarize yourself with advanced strategies and Xtrade's trading toolset. Take your trading to the next level.
          </Two>
          <Three>
            <Enter>Enter Course</Enter>
            <FaChevronRight style={{width: 10, height: 10,}}/>
          </Three>
        </Mid>
        <Line></Line>
        <Mid>
          <One>
            <div style={{backgroundColor: "#2671D4", color: 'white', borderRadius: "1.5rem", display:"flex", justifyContent: "center", alignItems: "center", width: "60px", height: "60px"}}>
            <FaChartArea style={{width: 30, height: 30}}/>
            </div>
            <H5>Stocks and CFDs</H5>
          </One>
          <Two>
          Discover the world of CFD trading: The ins & outs of the CFD market relevant
          </Two>
          <Three>
            <Enter>Enter Course</Enter>
            <FaChevronRight style={{width: 10, height: 10,}}/>
          </Three>
        </Mid>
        </Wrap>
        <NewButtonHold>
          <NewHold>
          <But to="/register">KRYPTBASE ASSETS</But>
          <But to="/register">VIDEO TUTORIALS</But>
          <But to="/register">COURSE</But>
          <But to="/register">E-BOOKS</But>
          <But to="/register">GLOSSARY</But>
          <But to="/register">TRADING INFO</But>
          </NewHold>
        </NewButtonHold>
        <BggHold>
          <H2>Get $100 Bonus</H2>
          <P>Get $100 BOnus On Your First Plan</P>
          <Button2> SIGNUP</Button2>
        </BggHold>
        <Wrap2>
                <iframe title='btc' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box",display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>

                <iframe title='eth' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>
                <iframe title='alt' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>
                </Wrap2>
      </Wrapper>
    </Container>
  )
}

export default Education;

const Wrap2 = styled.div`
width: 100%;
height: auto;
margin: 40px 0 10px 0;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
}



`;

const BggHold = styled.div`
width: 100%;
height: 30vh;
padding: 20px 10px 20px 30px;
background-image: url(${Bgg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
margin: 40px 0 20px 0;
border-radius: 1rem;
display: flex;
flex-direction: column;
justify-content: center;

@media Screen and (max-width: 768px){
  height: max-content;
}
`;
const H2 = styled.div`
font-size: 25px;
color: white;
font-weight: bold;
margin: 10px 0;
`;
const Button2 = styled.div`
color: #2671D4;
background-color: white;
width: max-content;
height: max-content;
padding: 10px 20px;
border-radius: 0.7rem;
margin: 10px 0
`;

const But = styled(Link)`
text-decoration: none;
width: 30%;
border: 1px solid #2671D4;
background-color: whitesmoke;
color: #2671D4;
border-radius: 5px;
padding: 10px;
margin: 5px 0;
cursor: pointer;
text-align: center;
font-weight: bold;
font-size: 14px;


@media Screen and (max-width: 768px){
  width: 90%;
}
`;

const NewButtonHold = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
height :auto;
align-self: center;
margin: 80px 0 0 0;
`;
const NewHold = styled.div`
width: 100%;
flex-wrap: wrap;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Wrap = styled.div`
width: 100%;
height: max-content;
display: flex;
flex-direction: column;
margin-top: 90px;
`;

const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver;
margin: 10px 0;

`;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
padding: 200px 0;
`;
const Wrapper = styled.div`
width: 70%;
display: flex;
flex-direction: column;
height :auto;

@media Screen and (max-width: 1280px){
  width: 80%
}
@media Screen and (max-width: 768px){
  width: 90%
}
`;
const Top = styled.div`
width: 100%;
height: max-content;
/* background-color: red; */
display: flex;
justify-content: space-between;

@media Screen and (max-width: 1024px){
  height: max-content;
  flex-direction: column;

}
`;
const Left = styled.div`
width: 48%;
/* background-color: yellow; */
@media Screen and (max-width: 1024px){
  width: 100%;
}
`;
const H1 = styled.div`
color:#012C6D;
font-size: 35px;
font-weight: bold;
margin-bottom: 5px;
`;
const H4 = styled.div`
/* color: #212529; */
color: gray;
font-weight: 300;
font-size: 25px;
`;
const ButtonHold = styled.div`
width: 65%;
/* background-color: red; */
display: flex;
justify-content: space-between;
height: max-content;
align-items: center;
margin-top: 40px;
`;
const Button = styled.button`
background-color: #faa05a;
border: none;
padding: 5px 10px;
border-radius: 6px;
color: white;
`;
const Right = styled.div`
width: 35%;
background-color: #f6f7f8;
color: #8f8f8f;
display: flex;
justify-content: space-between;
align-items: center;
padding: 4rem 2rem;

section{
  width: 55%;
}
@media Screen and (max-width: 1024px){
  width: 100%;
  margin: 80px 0 0 0;
}
`;
const IconHold = styled.div`
width: 43%;
display: flex;
justify-content: center;
align-items: center;
`;
const H5 = styled.div`
color: #012c6d;
font-size: 18px;
font-weight: bold;
margin: 0 0 10px 0;
`;
const P = styled.div``;
const Getstarted = styled(Link)`
background-color: #2671D4;
cursor: pointer;
border: none;
padding: 8px 10px;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
font-weight: 500;
width: 40%;
margin: 15px 0 0 0;
color: white;
cursor: pointer;
:hover{
  background-color: #1b5bb0
}

@media Screen and (max-width: 1024px){
  width: max-content
}
`;

const Mid = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 90px;

@media Screen and (max-width: 1024px){
  flex-direction: column;
  height: max-content;
}
`;
const One = styled.div`
width: 20%;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
`;
const Two = styled.div`
width: 55%;
font-size: 17px;
color: black;
display: flex;
align-items: center;
height: 100%;
`;
const Three = styled.div`
width: 10%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
@media Screen and (max-width: 1024px){
  width: max-content;
}
`;
const Enter = styled.div`
color: gray;
cursor: pointer;
`;
