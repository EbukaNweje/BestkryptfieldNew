import React from 'react';
import styled from "styled-components"
import {FaSignInAlt} from 'react-icons/fa'
import logo from "./in-logo.png"
import { Link } from 'react-router-dom';


const SideNav = () => {
  return (
    <Container>
       <Wrap>
       <LogoHold>
          <Logo src={logo} alt="logo"/>
        </LogoHold>
        <Nav>Home</Nav>
        <Nav>Markets</Nav>
        <Nav>Company</Nav>
        <Nav>Planning Services</Nav>
        <Nav>Education</Nav>
        <Nav>Resources</Nav>
        <Line></Line>
        <Register to="/login">
            Login<Icon2/>
          </Register>
       </Wrap>
    </Container>
  )
}

export default SideNav;

const Container = styled.div`
width: 90%;
top: 0;
position: absolute;
z-index: 500;
height: 70vh;
background-color: whitesmoke;
padding: 20px;
`;

const Wrap = styled.div`
width: 100%;
height: 95%;
margin-top: 70px;
`;
const Nav = styled.div`
color: #012C6D;
cursor: pointer;
font-size: 25px;
margin: 5px 0;
`;

const Icon2 = styled(FaSignInAlt)`

`;
const Register = styled(Link)`
cursor: pointer;
background-color: #2671D4;
font-size: 18px;
color: white;
border: none;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
width: 90%;
margin-top: 30px;
padding: 12px;
text-decoration: none;
`;

const Line = styled.div`
width: 100%;
background-color: silver;
height: 1px;
margin-top: 10px;
`;

const LogoHold = styled.div`
`;
const Logo = styled.img`
width :140px;
height: inherit;
`;