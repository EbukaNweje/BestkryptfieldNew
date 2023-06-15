import React, { useState} from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import bg from './signin.jpg'
import logo from './in-logo.png'

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  return (
    <MainContainer>
      <FirstContainer>
          <LogoDiv>
            <Link to="/">
              <LogoImg src={logo} alt="Logo"/>
            </Link>
          </LogoDiv>
      </FirstContainer>
      <SecondContainer>
        <Header2>Create Account</Header2>
        <FormInput>
          <EmailInput type="email" required placeholder="Email Address(*)" value={email} onChange ={(e)=>{setEmail(e.target.value)}}/>
          <Password type="password" required placeholder="Input Password(*)" value={password} onChange ={(e)=>{setPassword(e.target.value)}}/>
          <Code>
            <span style={{transform: "rotate(-35deg)", "-webkit transform": "rotate(-35deg)"}}>3</span>
            <span style={{transform: "rotate(-36deg)", "-webkit transform": "rotate(-36deg)"}}>2</span>
            <span style={{transform: "rotate(14deg)", "-webkit transform": "rotate(14deg)"}}>7</span>
            <span style={{transform: "rotate(-40deg)", "-webkit transform": "rotate(-40deg)"}}>5</span>
            <span style={{transform: "rotate(-12deg)", "-webkit transform": "rotate(-12deg)"}}>0</span>
            <span style={{transform: "rotate(10deg)", "-webkit transform": "rotate(10deg)"}}>4</span>
            <span>8</span>
            <span style={{transform: "rotate(10deg)", "-webkit transform": "rotate(10deg)"}}>1</span>
            </Code>
          <EmailInput placeholder='Enter Code'/>
          <ButtonContainer>
            <Button>Register</Button>
          </ButtonContainer>
          <FirstParagraph>
          Don't have an account?
          <span>
            <Link to="/register">Register</Link>
          </span>
        </FirstParagraph>
        </FormInput>
      </SecondContainer>
    </MainContainer>
  )
}

export default Login;

const Button = styled.div`
background-color: #0A1A32;
width: 30%;
padding: 0.8rem 0.2rem;
text-align: center;
color: white;
border-radius: 0.5rem;
font-size: 17px;
font-weight: 500;
margin-top: 2rem;
cursor: pointer;
transition: all 400ms;
:hover{
    background: none;
    transition: background-color 1s;
    border: 1px solid silver;
}

@media Screen and (max-width: 1024px){}
`;



const LogoImg = styled.img`
  width: 60%;
  margin-top: 50px;
`
const LogoDiv = styled.div`
  width: 70%;
  height: max-content;
  margin-top: 5%;
  margin-left: 5%;
`
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
    @media Screen and (max-width: 768px){
    flex-direction: column;
    /* background-color: rebeccapurple; */
    height: auto;
    padding: 40px 0;
  }
`

const FirstContainer = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 44%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  /* height: 70vh;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: column; */
}
`

const SecondContainer = styled.div`
  width: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const FirstParagraph = styled.p`
  margin: 5% 0 1% 0;
  text-align: end;
  margin-right: 9%;
  span {
    font-weight: 600;
    margin-left: 10px;
    a {
      text-decoration: none;
      color: #1e90ff;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`

const Header2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 10% 0;
`

const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FirstNameInput = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const LastNameInput = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Code = styled.div`
width: 58%;
height: 7vh;
/* background-color: rebeccapurple; */
background-color: #003;
color: white;
border-radius: 0.4rem;
padding: 4px 9px;
margin: 5px 0 10px 0;
display: flex;
justify-content: center;
align-items: center;
font-size: x-large;
font-style: oblique;
font-family: 'Henny Penny', cursive;
/* font-family: 'Henny Penny'; */
/* font-family:cursive; */
letter-spacing: 20px;
user-select: none;
/* span{
  float: left;
transform: rotate(-25deg);
-webkit-transform: rotate(-25deg)
} */
`;

const EmailInput = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  border: 1px solid grey;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

/* const ConfirmEmailInput = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const DateOfBirth = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
` */

const PhoneNumber = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const SelectCountry = styled.select`
  width: 60%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
  }
`
/* const SelectAccount = styled.select`
  width: 60%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
  }
`

const SelectPackage = styled.select`
  width: 60%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
  }
` */

const Password = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  border: 1px solid grey;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const ConfirmPassword = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const CheckBox = styled.input`
  display: flex;
  align-items: flex-start;
  margin: 0;
`

const CheckBoxContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 2%;
  height: 30px;
  p {
    color: gray;
  }
  @media (max-width: 768px) {
    width: 93%;
    p {
      font-size: 14px;
    }
  }
`

const Instruction = styled.p`
  font-size: 15px;
  margin: 2% 20%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
    font-size: 13px;
    margin-bottom: 5%;
  }
`

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  gap: 5%;
  button {
    height: 7vh;
    width: 25%;
    margin: 5% 0%;
    background: #1e90ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
    }
  }
  @media (max-width: 768px) {
    width: 93%;
    button {
      width: 55%;
    height: 9vh;
    margin-bottom: 5%;
    }
  }
`