import React from 'react';
import styled from "styled-components";
import Card from "./Card"

const Hero6 = () =>{
    return(
        <Container>
            <Wrapper>
                <H1>What people are saying</H1>
                <H4>At Kryptbase Assets we have built our reputation over the years and here is what our clients has to<br/> say about us</H4>
                <Cardhold>
                    <Card text="I highly recommend this investment company to anyone looking to diversify their portfolio." name="Sarah Johnson" title="CFO AT ABC CORP"/>
                    <Card text="I've been extremely satisfied with my returns and the transparency of the company's practices." name="Thomas Brown" title="MARKETING DIRECTOR AT DEFI INC"/>
                    <Card text="I never thought I'd be a stock market investor, but this company has made it easy and profitable for me." name="Maria Rodriguez" title="HR MANAGER AT TULIP LIMITED."/>
                </Cardhold>
            </Wrapper>
        </Container>
    )
};

export default Hero6;

const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
justify-content: center;
align-items:center;
padding-top: 80px;
@media Screen and (max-width: 768px){
    height: auto;
    padding: 20px 0;
}
`;
const Wrapper = styled.div`
width: 68%;
height: 95%;
display :flex;
flex-direction: column;
align-items: center;
@media Screen and (max-width: 768px){
    text-align: center;
}

`;
const H1 = styled.div`
font-size: 30px;
color: #012C6D;
font-weight: bold;
margin: 15px 0;
`;
const H4 = styled.div`
font-size: 20px;
color: grey;
text-align: center;
margin-bottom: 10px;
`;
const Cardhold = styled.div`
width :100%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;

