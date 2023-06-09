import React from 'react'
import styled from "styled-components";


const News = (props) => {
  return (
    <Hold>
      <Image src={props.img}/>
        <H1>{props.news}</H1>
      <Date>{props.date}</Date>
      <Desc>{props.desc}</Desc>
      <Continue>CONTINUE READING...</Continue>
    </Hold>
  )
}

export default News;

const Hold = styled.div`
width: 31%;
height: 450px;
/* background-color: whitesmoke; */
border-radius: 7px;
padding: 15px;
margin: 0 5px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media Screen and (max-width: 768px){
    width: 90%;
    margin: 5px 0;
}
`;

const Image = styled.img`
width: 100%;
height: 50%;
background-color: red;
`;

const H1 = styled.div`
font-size: 25px;
color: #012C6D;
font-weight: bold;
margin: 15px 0;
`;
const Date = styled.div``;
const Desc = styled.div`
font-size: 13px;
color: grey;
margin: 10px 0;
`;
const Continue = styled.div`
font-size: 13px;
color: black;
margin: 10px 0;
`;