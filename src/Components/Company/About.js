import React from 'react'
import styled from "styled-components"
import bg from "./about.png"
import { FaLeaf, FaPlus } from 'react-icons/fa';

const About = () => {
  return (
    <Container>
      <Wrapper>
          <Div>
          </Div>
        <Frame>
        <iframe title="frame2" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22Gold%22%2C%22proName%22%3A%22COMEX%3AGC1!%22%7D%2C%7B%22description%22%3A%22BNB%22%2C%22proName%22%3A%22CRYPTOCAP%3ABNB%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D"  style={{boxSizing: "border-box", display: "block", height: "50px", width: "100%"}}></iframe>
        </Frame>
        <Down>
                              <Select>
                                <option value="">Select Language</option>
                                <option value="en|af">Afrikaans</option>
                                <option value="en|sq">Albanian</option>
                                <option value="en|ar">Arabic</option>
                                <option value="en|hy">Armenian</option>
                                <option value="en|az">Azerbaijani</option>
                                <option value="en|eu">Basque</option>
                                <option value="en|be">Belarusian</option>
                                <option value="en|bg">Bulgarian</option>
                                <option value="en|ca">Catalan</option>
                                <option value="en|zh-CN">Chinese (Simplified)</option>
                                <option value="en|zh-TW">Chinese (Traditional)</option>
                                <option value="en|hr">Croatian</option>
                                <option value="en|cs">Czech</option>
                                <option value="en|da">Danish</option>
                                <option value="en|nl">Dutch</option>
                                <option value="en|en">English</option>
                                <option value="en|et">Estonian</option>
                                <option value="en|tl">Filipino</option>
                                <option value="en|fi">Finnish</option>
                                <option value="en|fr">French</option>
                                <option value="en|gl">Galician</option>
                                <option value="en|ka">Georgian</option>
                                <option value="en|de">German</option>
                                <option value="en|el">Greek</option>
                                <option value="en|ht">Haitian Creole</option>
                                <option value="en|iw">Hebrew</option>
                                <option value="en|hi">Hindi</option>
                                <option value="en|hu">Hungarian</option>
                                <option value="en|is">Icelandic</option>
                                <option value="en|id">Indonesian</option>
                                <option value="en|ga">Irish</option>
                                <option value="en|it">Italian</option>
                                <option value="en|ja">Japanese</option>
                                <option value="en|ko">Korean</option>
                                <option value="en|lv">Latvian</option>
                                <option value="en|lt">Lithuanian</option>
                                <option value="en|mk">Macedonian</option>
                                <option value="en|ms">Malay</option>
                                <option value="en|mt">Maltese</option>
                                <option value="en|no">Norwegian</option>
                                <option value="en|fa">Persian</option>
                                <option value="en|pl">Polish</option>
                                <option value="en|pt">Portuguese</option>
                                <option value="en|ro">Romanian</option>
                                <option value="en|ru">Russian</option>
                                <option value="en|sr">Serbian</option>
                                <option value="en|sk">Slovak</option>
                                <option value="en|sl">Slovenian</option>
                                <option value="en|es">Spanish</option>
                                <option value="en|sw">Swahili</option>
                                <option value="en|sv">Swedish</option>
                                <option value="en|th">Thai</option>
                                <option value="en|tr">Turkish</option>
                                <option value="en|uk">Ukrainian</option>
                                <option value="en|ur">Urdu</option>
                                <option value="en|vi">Vietnamese</option>
                                <option value="en|cy">Welsh</option>
                                <option value="en|yi">Yiddish</option>
                            </Select>
        <Title>
          <FaLeaf style={{color: "#012C6D", width: 40, height: 40}}/>
          <H1>About Kryptbase Assets</H1>
        </Title>
        <H4>Kryptbase Assets advises corporate, financial sponsor and venture capital clients as they prepare to raise capital in the equity markets and as owners consider efficient and value-maximizing monetization strategies.</H4>
        <P>Experience matters. Creating long-term equity value requires the knowledge that can only be gained from our volume of capital markets transactions and breadth of senior, sector-specific expertise.
          <br/>
          Our Kryptbase Assets senior team members are exclusively equity specialists with collectively over 330 years of capital markets transaction experience and relationships forged at the leading investment banking houses around the world. This unmatched expertise has been leveraged at Kryptbase Assets in over 860 engagements and nearly $400bn in capital raised since our founding in 2005 (including dual-track IPO/Private Sale processes).
          <br/>
          Further expertise is accessible through our partner firm, Kryptbase Assets Strategic Communications, a premier Investor Relations and Corporate Communications firm with over 20 years of experience partnering with private and public companies across all industry sectors. Offerings include fully outsourced investor relations, environmental, social and governance (ESG) evaluations, perception surveys, C-suite visibility programs, content development, media relations, crisis preparation, digital and social media communications and media and presentation training.
        </P>
        </Down>
        <br/>
        <br/>
        <br/>
        <br/>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>IPO Advisory</H3>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>Marketed Follow-On Advisory</H3>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>Block Trades</H3>
        </Long>
        <Long>
          <FaPlus style={{color: "012C6D", width: 12, height: 12}}/>
          <H3>Structured Equity</H3>
        </Long>
        <Wrap2>
                <iframe title='btc' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box",display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>

                <iframe title='eth' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>
                <iframe title='alt' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>
                </Wrap2>
      </Wrapper>
    </Container>
  )
};

export default About;

const Wrap2 = styled.div`
width: 100%;
height: auto;
margin: 40px 0;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
}



`;

const Long = styled.div`
margin:10px 0;
width: 95%;
height: 80px;
padding: 20px 10px;
border: 1px solid #6EA0E2;
display: flex;
justify-content: flex-start;
align-items: center;
border-radius: 0.4rem;
cursor: pointer;
`;
const H3 = styled.div`
color:#012C6D;
font-size: 20px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: auto;
`;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;

`;
const Wrapper = styled.div`
width: 70%;
height: auto;
display: flex;
flex-direction: column;
margin-top: 90px;

@media Screen and (max-width: 1280px){
  width: 80%;
}
`;
const Div = styled.div`
width: 100%;
height: 450px;
/* background-color: green; */
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url(${bg});
border-radius: 5px 5px 0px 0px;

`;
const Down = styled.div`

`;
const Title=  styled.div`
margin: 100px 0 30px 0;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
`;
const H1 = styled.div`
color:#012C6D;
font-size: 30px;
font-weight: bold;
margin: 0 0 0 10px;

@media Screen and (max-width: 768px){
  font-size: 20px;
}
`;
const H4 = styled.div`
font-size: 14px;
color:#012C6D;
font-weight: bold;
margin:0 0 30px 0;

@media Screen and (max-width: 768px){
 font-size: 16px;
 font-weight: bold;
}
`;
const P = styled.div`
font-size: 18px;
/* color:black; */
color: #212529;
@media Screen and (max-width: 768px){
 font-size: 16px;
 font-weight: bold;
}
`;
const Frame = styled.div`
width: 100%;
background-color: white;
`;

const Select = styled.select`
padding: 10px;
margin-top: 70px;
font-size: 17px;
cursor: pointer;

`;