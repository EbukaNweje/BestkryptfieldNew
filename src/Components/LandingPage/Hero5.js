import React from "react";
import styled from "styled-components";
import bigimg from "./bigimg.png"
import coinbase from "./coinbase.png"

const Hero5 = () =>{
    return(
        <Container>
            <Wrapper>
                <H1>How To Invest</H1>
                <Line></Line>
                <Div>
                    <Reg>
                        <Numb>1</Numb>
                        <Hold>
                            <H5>Register</H5>
                            <P>Signup on our platform to join <br/> investors earn profits</P>
                        </Hold>
                    </Reg>
                    <Reg>
                        <Numb>1</Numb>
                        <Hold>
                            <H5>Register</H5>
                            <P>Signup on our platform to join <br/> investors earn profits</P>
                        </Hold>
                    </Reg>
                    <Reg>
                        <Numb>1</Numb>
                        <Hold>
                            <H5>Register</H5>
                            <P>Signup on our platform to join <br/> investors earn profits</P>
                        </Hold>
                    </Reg>
                </Div>
                <Line></Line>
                <Div>
                    <Space></Space>
                    <Line2></Line2>
                    <Coin>
                        <img src={bigimg} alt="bigcoin"/>
                    </Coin>
                    <Line2></Line2>
                    <Line3></Line3>
                    <Coin>
                        <img src={coinbase} alt="coinbase"/>
                    </Coin>
                    <Line2></Line2>
                    <Space></Space>
                </Div>
            </Wrapper>
        </Container>
    )
};

export default Hero5;

const Container = styled.div`
width: 100%;
height: 50vh;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    height: auto;
}
`;
const Wrapper = styled.div`
width: 65%;
height: 95%;
background-color: whitesmoke;
padding: 25px;
border-radius: 10px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`;
const H1 = styled.div`
font-size: 28px;
color: #012C6D;
font-weight: bold;
margin-bottom: 25px;
`;
const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver;
`;
const Div = styled.div`
width: 100%;
height: 30%;
/* background-color: red;  */
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
margin: 10px 0;

@media Screen and (max-width: 768px){
    flex-direction: column;
    height: auto;
}

`;
const Reg = styled.div`
width: 29%;
height: 95%;
margin: 0 5px;
display :flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    width: 100%;
    margin: 15px 0;
}
`;
const Numb = styled.div`
width: 40px;
height: 40px;
background-color: #4184DD;
display: flex;
justify-content: center;
align-items: center;
font-size: 17px;
color: white;
border-radius: 1rem;

@media Screen and (max-width: 768px){
  width: 35px;
  height: 35px;
  border-radius: 0.8rem;
}
`;
const Hold = styled.div`
width: 80%;
`;
const H5 = styled.div`
font-size: 20px;
color: #012C6D;
font-weight: 500;
`;
const P = styled.div`
color: grey;
font-size: 17px;
`;
const Space = styled.div`
width: 22%;
height: 95%;

@media Screen and (max-width: 768px){
    width: 100%;
    /* background-color: red; */
    height: 80px;
    display: none;
}
`;
const Line2 = styled.div`
width: 1px;
height: 95%;
background-color: silver;

@media Screen and (max-width: 768px){
    width: 100%;
    height: 1px;
    display: none;
}


`;
const Line3 = styled.div`

display: none;

@media Screen and (max-width: 768px){
    width: 100%;
    height: 1px;
    display: block;
    background-color: silver;
}


`;
const Coin = styled.div`
width: 22%;
height: 98%;
display: flex;
justify-content: center;
align-items:center;
/* background-color: red; */
img{
    width: 60%;
    height: inherit;
    object-fit: contain;
}

@media Screen and (max-width: 768px){
    width: 100%;
    /* background-color: red; */
    height: 80px;
}
`;

