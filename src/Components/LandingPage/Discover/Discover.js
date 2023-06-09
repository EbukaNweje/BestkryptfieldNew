import React, { useEffect } from 'react';
import styled from 'styled-components';
import pic from './banner1.png'
import award1 from './award1.png'
import award2 from './award2.png'
import award3 from './award3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Discover = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
      }, []);

    return(
        <Container>
            <Wrapper>
                 <Right data-aos="fade-down">
                    <H1>
                    OUR ADVISORS CONNECT YOUR FINANCES TO WHAT YOU WANT OUT OF LIFE AND CREATE A PLAN DESIGNED TO MAKE IT HAPPEN, REVEALING POSSIBILITIES WHILE PROTECTING YOU FROM THE UNEXPECTED—TODAY AND EVERY DAY AFTER.
                    </H1>
                    <Line></Line>
                    <P>A personalized plan that brings all aspects of your financial life together A strategic mix of insurance and investments working together for your goals Your go-to financial expert who helps keep your big picture, and dreams, in focus</P>
                    <H5>Multi-award winner</H5>
                    <P>We’ve been consistently recognised by our industry and have won the highest accolades for our products, platform and service.</P>
                    {/* <Button>About Us</Button> */}
                    <AwardHold>
                        <img src={award1} alt="award"/>
                        <img src={award2} alt="award"/>
                        <img src={award3} alt="award"/>
                    </AwardHold>
                </Right>
                <Left>
                    {/* <img src={pic} alt='rectangle'/> */}
                    <Rec></Rec>
                </Left>
            </Wrapper>
        </Container>
    )
};

export default Discover;

const AwardHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 5px;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    img{
        margin: 7px 0;
    }
    
}
`;

const Container = styled.div`
/* background: linear-gradient(120deg, #192441,#463A5C); */
width: 100%;
height: 80vh;
/* height: auto; */
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0;
background-color: #fff;

@media Screen and (max-width: 1280px){
    height: auto;
    width: 100%;

}
`;
const Wrapper = styled.div`
width: 70%;
height: 95%;
display: flex;
justify-content: space-between;
flex-direction: row-reverse;

@media Screen and (max-width: 1024px){
    width: 100%;
    align-items: center;
    flex-direction: column;
    /* flex-wrap:wrap; */
    /* background-color: red; */
}

@media Screen and (max-width: 768px){
    height: auto;
}
@media Screen and (max-width: 425px){
    width: 100%;
}

`;
const Left = styled.div`
width: 45%;
height:100%;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 1280px){
    width: 75%;
    display: flex;
    justify-content: center;

};

@media Screen and (max-width: 768px){
    width: 90%;
    justify-content: center;

};

@media Screen and (max-width: 425px){
    /* right: 50px; */
    width: 100%;
    height: 50%;
    /* display: none; */
}

`;
const Right = styled.div`
width: 50%;
height: auto;
display:flex;
flex-direction: column;

@media Screen and (max-width: 1280px){
    width: 45%;
    margin: 50px 0;
}
@media Screen and (max-width: 768px){
    width: 45%;
    margin-top: 40px;
}
@media Screen and (max-width: 600px){
   display: none;
}
`;
const Rec = styled.div`
height: 520px;
background-color: #015FC9;
border-radius: 0.5rem;
margin-top: 20px;
/* margin-left: 150px; */
width:80%;
background-image: url(${pic});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

@media Screen and (max-width: 768px){
    width:100%;
    display: none;
}
`;
const H1 = styled.div`
font-size: 20px;
font-weight: 500;
color: #012C6D;

`;
const H5 = styled.div`
font-size: 17px;
font-weight: 500;
margin: 10px 0;
color: #012C6D;

`;
const Line = styled.div`
width: 100%;
height :1px;
background-color :#015FC9;
margin:30px 0;

`;
const P = styled.div`
margin: 20px 0;
color: #0A1A32;

`;

