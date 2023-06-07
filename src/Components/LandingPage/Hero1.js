import React from 'react'
import styled from "styled-components";
import bg from "../Assets/forex.jpeg"

const Hero1 = () => {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Div>
          <H1>VALUE INVESTING REDEFINED</H1>
          <H4>At kryptbased-assets.com, we create<br/> value by sticking to our consistent<br/> investment philosophy and disciplined<br/> research process</H4>
          </Div>
        </Main>
        <Frame>
        <iframe title="frame2" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22Gold%22%2C%22proName%22%3A%22COMEX%3AGC1!%22%7D%2C%7B%22description%22%3A%22BNB%22%2C%22proName%22%3A%22CRYPTOCAP%3ABNB%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D"  style={{boxSizing: "border-box", display: "block", height: "50px", width: "100%"}}></iframe>
        </Frame>
      </Wrapper>
    </Container>
  )
}

export default Hero1;

const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
@media Screen and (max-width: 768px){
  height :auto;
  padding: 15px 0;
}
`;
const Wrapper = styled.div`
width: 70%;
height: 95%;
display: flex;
flex-direction: column;
align-items: center;

/* background-color: red; */
`;
const Main = styled.div`
width: 100%;
height: 90%;
/* background-color: green; */
display: flex;
justify-content: flex-end;
align-items: center;
background-size: cover;
background-position: center;
background-image: url(${bg});
border-radius: 5px 5px 0px 0px
`;
const Div = styled.div`
width: 55%;
height: 90%;
padding: 15px;
display :flex;
flex-direction: column;
justify-content: center;
`;

const H1 = styled.h1`
color:white;
`;
const H4 = styled.div`
font-size: 20px;
color:white;

`;

const Frame = styled.div`
width: 100%;
background-color: white;
`;