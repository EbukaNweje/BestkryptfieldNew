import React from 'react'
import styled from 'styled-components'
import {FaSignInAlt} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import logo from "./in-logo.png"

const Header = () => {
  return (
    <Container>
      <Header1>
        <ButtonHold>
          <Button>
            Login
            <Icon/>
          </Button>
          <Register>
            Register<Icon2/>
          </Register>
        </ButtonHold>
      </Header1>
      <Wrapper>
        <LogoHold>
          <Logo src={logo} alt="logo"/>
        </LogoHold>
        <NavHold>
          <Nav2><Nav>Home</Nav></Nav2>
          <Nav2><Nav>Markets</Nav></Nav2>
          <Nav2><Nav>Company</Nav></Nav2>
          <Nav2><Nav>Planning Services</Nav> <IoIosArrowDown/> </Nav2>
          <Nav2><Nav>Education</Nav> <IoIosArrowDown/></Nav2>
          <Nav2><Nav>Resources</Nav> <IoIosArrowDown/></Nav2>
        </NavHold>
      </Wrapper>
    </Container>
  )
}

export default Header;

const Container = styled.div`
width: 100%;
height: auto;
display :flex;
flex-direction: column;
align-items: center;
background-color: white;
position: fixed;
z-index: 500;
background-color: whitesmoke;
`;
const Header1 = styled.div`
width: 70%;
height: 35px;
/* background-color: blue; */
display: flex;
justify-content: flex-end;
align-items: center;
border-bottom: 2px solid lightgrey;
`;
const ButtonHold = styled.div`
width: 15%;
display: flex;
justify-content: space-between;
`;
const Button = styled.button`
padding: 5px 8px;
border: 1px solid grey;
display: flex;
align-items: center;
border-radius: 5px;
width: 70px;
display: flex;
justify-content: space-between;
cursor: pointer;
`;
const Icon = styled(FaSignInAlt)`
`;
const Icon2 = styled(FaSignInAlt)`

`;
const Register = styled.button`
padding: 5px 10px;
cursor: pointer;
background-color: grey;
color: white;
border: none;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
width: 95px
`;
const Wrapper = styled.div`
width: 70%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
/* position: sticky;
z-index: 500; */
`;
const LogoHold = styled.div`
`;
const Logo = styled.img`
width :110px;
height: inherit;
`;
const NavHold = styled.div`
width: 65%;
/* background-color: blue; */
display: flex;
justify-content: space-between;
`;
const Nav2 = styled.div`
color: #0A1A32;
width: auto;
display: flex;
justify-content: space-between;
align-items: center;
height: max-content;
cursor: pointer;
:hover{
  color: blue;
}
`;
const Nav = styled.div`
color: #0A1A32;
cursor: pointer;
`;





