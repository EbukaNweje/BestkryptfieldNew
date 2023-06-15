import React, {useState} from 'react'
import styled from 'styled-components'
import {FaSignInAlt, FaBars, FaTimes} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import logo from "./in-logo.png"
import SideNav from './SideNav'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false);

  const HandleClick = () =>{
    setClick(!click)
  }
  return (
    <Container>
      <Header1>
        <ButtonHold>
          <Button to="/login">
            Login
            <Icon/>
          </Button>
          <Register to="/register">
            Register<Icon2/>
          </Register>
        </ButtonHold>
      </Header1>
      <Wrapper>
        <LogoHold>
          <Logo src={logo} alt="logo"/>
        </LogoHold>
        <NavHold>
          <Nav2><Nav to='/'>Home</Nav></Nav2>
          <Nav2><Nav to="/markets">Markets</Nav></Nav2>
          <Nav2><Nav to='/company'>Company</Nav></Nav2>
          <Nav2><Nav to='/planning'>Planning Services</Nav> <IoIosArrowDown/> </Nav2>
          <Nav2><Nav to='education'>Education</Nav></Nav2>
          <Nav2><Nav to='/resources'>Resources</Nav> <IoIosArrowDown/></Nav2>
        </NavHold>
        <BurgerHold>
          {click? <FaTimes onClick={HandleClick} style={{color: "grey"}}/> : <FaBars style={{color: "grey"}} onClick={HandleClick}/>}
        </BurgerHold>
      </Wrapper>
      {click? <SideNav/> : null}
    </Container>
  )
}

export default Header;

const BurgerHold = styled.div`
display: none;

@media Screen and (max-width: 768px){
  display :flex;
  width: 40px;
  height: 30px;
  border: 1px solid silver;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;

  :hover{
    color: blue
  }
}
`;

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
width: 18%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
  display: none;
}
`;
const Button = styled(Link)`
padding: 3px 8px;
border: 1px solid grey;
display: flex;
align-items: center;
border-radius: 5px;
text-decoration: none;
width: 60px;
display: flex;
justify-content: space-between;
cursor: pointer;
color: grey
`;
const Icon = styled(FaSignInAlt)`
`;
const Icon2 = styled(FaSignInAlt)`

`;
const Register = styled(Link)`
padding: 3px 10px;
cursor: pointer;
background-color: grey;
color: white;
text-decoration: none;
border: none;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
width: 85px
`;
const Wrapper = styled.div`
width: 70%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
/* position: sticky;
z-index: 500; */
@media Screen and (max-width: 1280px){
    width: 80%
}
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

@media Screen and (max-width: 768px){
  display: none;
}
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
const Nav = styled(Link)`
color: #0A1A32;
cursor: pointer;
text-decoration: none;
`;





