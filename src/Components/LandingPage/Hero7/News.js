import React from 'react'
import styled from "styled-components";


const News = () => {
  return (
    <Hold>News</Hold>
  )
}

export default News;

const Hold = styled.div`
width: 31%;
height: 300px;
background-color: whitesmoke;
border-radius: 7px;
padding: 25px;
margin: 0 5px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media Screen and (max-width: 768px){
    width: 90%;
    margin: 5px 0;
}
`;