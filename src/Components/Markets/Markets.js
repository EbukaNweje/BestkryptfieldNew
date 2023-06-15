import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Card from './Card';
import { FaChartBar, FaSeedling, FaChartPie, FaChalkboardTeacher, FaFunnelDollar, FaHandshake, FaMoneyBill,FaCheck } from 'react-icons/fa';


const Markets = () => {
  return (
    <Container>
        <Wrapper>
            <Nav to='/'>Home</Nav>
            <H1>A relationship on your terms.</H1>
            <H4>Work with us the way you want.</H4>
            <P>Some believe you must choose between an online broker and a wealth management firm. At Kryptbase Assets, you don’t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.</P>
            <Section>
                <Card title="Stocks" bg="#20C99F" iconmain={<FaSeedling/>} text="While stocks fluctuate, growth may help you keep ahead of inflation. Potentially generate income with dividends."/>
                <Card title="Real Estate" bg="#007bff" iconmain={<FaChartBar/>} text="As one of the world's largest investors in real estate, we own and operate iconic properties in the world's most dynamic markets."/>
                <Card title="Infrastructure" bg="#6f42c1" iconmain={<FaChartPie/>} text="We are one of the world’s largest infrastructure investors, owning and operating assets across the utilities.."/>
                <Card bg="#343a40" title="Forex Trading" iconmain={<FaChalkboardTeacher/>} text="The FX market is one of the world’s biggest markets. You can trade currency pairs from every corner of the world." />
                <Card bg="#6c757d" iconmain={<FaFunnelDollar/>} title="Crypto Assets" text=" Leveraged trading provides high liquidity, matched with the reputation cryptocurrencies have for being highly volatile, "/>
                <Card iconmain={<FaHandshake/>} title="Fixed Income" text="We aim to generate consistent outperformance by systematically applying investment themes across securities. We believe that a multi-factor..." bg="#fd7e14"/>
                <Card bg="#20C99F" title="Multi Assets" text="Multi-asset income solutions designed to provide clients with stable, sustainable income in today’s low-yield environment.." iconmain={<FaSeedling/>}/>
                <Card bg="#007bff" title="Renewable Power" text="We are one of the world's largest investors in renewable power, with approximately 21,000 megawatts of generating capacity." iconmain={<FaChartBar/>}/>
                <Card bg="#6f42c1" title="Agriculture" text="Our agriculture division,manage its agriculture investments in a manner that integrates the development, management, and operation" iconmain={<FaChartPie/>}/>
                {/* <CardHold>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardHold>
                <CardHold>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardHold>
                <CardHold>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardHold> */}
                <Card bg="#6f42c1" text="The Non-farm payrolls report is one of the most anticipated economic news reports in the forex markets." title="NFP" iconmain={<FaChartPie/>} />
            </Section>
                <Down>
                    <Left>
                        <Icon>
                            <FaMoneyBill style={{width: 40, height: 40}}/>
                        </Icon>
                        <TextHold>
                            <H11>Why trade with Kryptbase Assets?</H11>
                            <P>Our team is made up of bright individuals who came together to build a business with the aim of developing a sizable budget for successful trading in the cryptocurrency market.</P>
                            <Div>
                                <DivLeft>
                                    <Hold>
                                    <FaCheck style={{color: "#4184DD"}}/>
                                    <div>Direct Market Access (DMA)</div>
                                    </Hold>
                                    <Hold>
                                    <FaCheck style={{color: "#4184DD"}}/>
                                    <div>Leverage up to 1:500</div>
                                    </Hold>
                                    <Hold>
                                    <FaCheck style={{color: "#4184DD"}}/>
                                    <div>T+0 settlement</div>
                                    </Hold>
                                    <Hold>
                                    <FaCheck style={{color: "#4184DD"}}/>
                                    <div>Dividends paid in cash</div>
                                    </Hold>
                                </DivLeft>
                                <DivRight>
                                    <Hold>
                                        <FaCheck style={{color: "#4184DD"}}/>
                                        <div>Free from UK Stamp Duty</div>
                                    </Hold>
                                    <Hold>
                                        <FaCheck style={{color: "#4184DD"}}/>
                                        <div>Short selling available</div>
                                    </Hold>
                                    <Hold>
                                        <FaCheck style={{color: "#4184DD"}}/>
                                        <div>Commissions from 0.08%</div>
                                    </Hold>
                                    <Hold>
                                        <FaCheck style={{color: "#4184DD"}}/>
                                        <div>Access to 1500 global shares</div>
                                    </Hold>
                                </DivRight>
                            </Div>
                        </TextHold>
                    </Left>
                    <Right>
                        <H3>Check out our Shares offer</H3>
                        <iframe title="frame" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22width%22%3A400%2C%22height%22%3A660%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%2C%22d%22%3A%22EUR%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%2C%22d%22%3A%22GBP%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%2C%22d%22%3A%22USD%2FJPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%2C%22d%22%3A%22USD%2FCHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%2C%22d%22%3A%22AUD%2FUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%2C%22d%22%3A%22USD%2FCAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%5D%2C%22utm_source%22%3A%22kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22kryptbased-assets.com%2Fmarkets.php%22%7D"  style={{boxSizing: "border-box", display: "block", height: "660px", width: "100%"}}></iframe>
                    </Right>
                </Down>
                <Wrap>
                    <Text>IS BITCOIN A GOOD INVESTMENT - THE ANSWER IS, YES!</Text>
                    <Button>Checkout</Button>
                </Wrap>
                <Wrap2>
                <iframe title='btc' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box",display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>

                <iframe title='eth' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>
                <iframe title='alt' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "270px", margin: "5px"}}></iframe>
                </Wrap2>
        </Wrapper>
    </Container>
  )
}

export default Markets;


const Wrap = styled.div`
width: 97%;
height: auto;
padding: 40px 0px 40px 30px;
/* border: 1px solid #FFCC40; */
border-radius: 0.6rem;
border: 1px solid skyblue;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
margin: 30px 0 0 0;
/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */

@media Screen and (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
    padding-right: 50px;
    padding: 60px 10px;
    width: 100%;

}
@media Screen and (max-width: 500px){
    flex-direction: column;
    align-items: flex-start;
    padding-right: 50px;
    padding: 60px 10px;
    width: 95%;

}
`;
const Wrap2 = styled.div`
width: 100%;
height: auto;
margin: 35px 0;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
}



`;
const Text = styled.div`
font-weight: bold;
font-size: 20px;
color: #012C6D;
`;
const Button = styled.div`
width: 130px;
height: auto;
padding: 10px 20px;
background-color: #015ec9;
border-radius: 0.5rem;
/* margin-right: 45px; */
text-align: center;
margin-top: 15px;
margin-right: 15px;
font-weight: bold;
color: #fff;
`;

const TextHold = styled.div`
width: 85%;
display: flex;
flex-direction: column;
height: auto;
@media Screen and (max-width: 768px){
    width: 100%;
}
`;
const Div = styled.div`
width: 100%;
display :flex;
justify-content: space-between;
@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Hold = styled.div`
width: 100%;
margin :5px 0;
display: flex;
justify-content: flex-start;
align-items: center;

div{
    margin-left: 10px;
}
`;
const DivLeft = styled.div`
width: 49%;
display: flex;
flex-direction: column;

@media screen and (max-width: 768px){
    width: 100%;
}
`;
const DivRight = styled.div`
width: 49%;
display: flex;
flex-direction: column;
@media screen and (max-width: 768px){
    width: 100%;
}
`;

const Icon = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: #4184DD;
color :white;
display: flex;
justify-content: center;
align-items: center;
@media Screen and (max-width: 768px){
    display: none;
}
`;

const Down = styled.div`
width :100%;
display :flex;
justify-content: space-between;
height: auto;
margin-top: 80px;
@media Screen and (max-width: 1280px){
    flex-direction: column;
}
`;

const Container = styled.div`
width: 100%;
height: auto;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
`;
const Wrapper = styled.div`
width: 70%;
height: 95%;
/* background-color: green; */
padding: 50px 0;
display: flex;
flex-direction: column;

@media Screen and (max-width: 1280px){
    width: 80%;
}

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
const Nav = styled(Link)`
text-decoration: none;
color: black;
cursor: pointer;
`;
const H11 = styled.div`
color: #012C6D;
font-size: 35px;
font-weight: bold;
margin-bottom: 10px;
/* margin: 45px 0 5px 0; */
@media Screen and (max-width: 1280px){
    font-size: 20px;
}
`;
const H1 = styled.div`
color: #012C6D;
font-size: 35px;
font-weight: bold;
margin: 45px 0 5px 0;

`;
const H3 = styled.div`
color: #012C6D;
font-size: 30px;
font-weight: bold;
margin: 0 0 30px 0;
@media Screen and (max-width: 1280px){
    font-size: 20px;
}
`;
const H4 = styled.div`
color: silver;
font-size: 20px;
margin: 0 0 30px 0;
`;
const P = styled.div`
margin: 0 0 30px 0;
font-size: 17px;
@media Screen and (max-width: 1280px){
    font-size: 15px;
}
`;
const Section = styled.section`
width: 100%;
height: auto;
/* background-color: red; */
margin: 10px 0;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
// const CardHold = styled.div`
// width: 100%;
// height: auto;
// background-color: red;
// margin: 10px 0;
// display: flex;
// justify-content: space-between;

// @media Screen and (max-width: 1280px){
//     flex-wrap: wrap;
// }
// `;
const Left = styled.div`
width: 50%;
height: auto;
/* background-color: green; */
display: flex;
justify-content: space-between;
padding: 30px 0;
@media screen and (max-width: 1280px){
    width: 90%;
    /* align-items: center; */
}
@media screen and (max-width: 768px){
    width: 100%;
    /* align-items: center; */
}
`;
const Right = styled.div`
width: 50%;
display :flex;
flex-direction: column;
@media screen and (max-width: 768px){
    width: 70%;
}

`;