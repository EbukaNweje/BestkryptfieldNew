import React from "react";
import styled from "styled-components";
import illus from "./illus.jpg"

const Hero4 = () =>{
    
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Img src={illus} alt="illustration"/>
                    <Div>
                        <H1>INVESTOR RELATIONS</H1>
                        <H5>we offer a diversity of<br/> investment approaches,<br/> encompassing bottom-top fundamental active<br/> management...</H5>
                    </Div>
                </Left>
                <Line></Line>
                <Mid>
                    <H1>OUR DIVERSITY</H1>
                    <H5>we want every person to have the<br/> opportunity to succeed based on merit,<br/> regardless of race.They help us generate<br/> better ideas, reach more balanced<br/> decisions,</H5>
                </Mid>
                <Line></Line>
                <Right>
                    <H1>INCLUSION STRATEGY</H1>
                    <H5>To us, diverse and inclusive teams enriched<br/> with people of distinctive backgrounds<br/> make us better.Engage our communities<br/> and help our clients achieve better<br/> outcomes.</H5>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Hero4;

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
width: 70%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;
@media Screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
}
`;
const Left = styled.div`
width: 33%;
display: flex;
justify-content: space-between;
align-items: center;
@media Screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    width: 95%;
    padding: 20px 0;
    text-align: center;
}
`;
const Img = styled.img`
width: 120px;
@media Screen and (max-width: 768px){
    display: none;
}
`;
const Div = styled.div``;
const H1 = styled.div`
font-size: 18px;
font-weight: bold;
color: #012C6D;
margin-bottom: 20px;
`;
const H5 = styled.div``;
const Mid = styled.div`
width: 30%;
@media Screen and (max-width: 768px){
    width: 95%;
    text-align: center;

}
`;
const Right = styled.div`
width: 30%;
@media Screen and (max-width: 768px){
    width: 95%;
    text-align: center;

}
`;
const Line = styled.div`
height: 85%;
width: 1px;
background-color: silver;
`;

