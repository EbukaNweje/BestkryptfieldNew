import React from "react";
import styled from 'styled-components';

const Card = (props) =>{
    return(
        <Hold>
            <H3>{props.text}</H3>
            <Down>
                <Name>{props.name}Thomas Brown</Name>
                <Title>{props.title}
                    MARKETING DIRECTOR AT DEFI INC
                </Title>
            </Down>
        </Hold>
    )
};


export default Card;

const Hold = styled.div`
width: 31%;
height: 220px;
background-color: whitesmoke;
border-radius: 7px;
padding: 25px;
margin: 0 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const H3 = styled.div`
font-size: 18px;
color: grey;
`;
const Down =  styled.div``;
const Name = styled.div`
color: black;
font-weight: bold;
`;
const Title = styled.div`
font-size: 12px;
color: silver;
`;