import React, { useState} from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import bg from './bg.jpg'
import logo from './in-logo.png'

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [referenceid, setReferenceId] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [gender, setGender] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  return (
    <MainContainer>
      <FirstContainer>
          <LogoDiv>
            <Link to="/">
              <LogoImg src={logo} alt="Logo"/>
            </Link>
          </LogoDiv>
          {/* <Welcome>
              <WelText>Welcome to <span>kryptbase assets</span> </WelText>
              <Parg>Our goal here is to provide investors with a platform that is trustworthy, 
                reliable and efficient.</Parg>
            </Welcome>
            <FirstFooter>
              <FirstFooterText1>© 2020 preeminentcryptotrade.com ! </FirstFooterText1>
              <FirstFooterText2>
                <span><Link to="/contact" style={{color: "gray"}}>Contact</Link></span>
              </FirstFooterText2>
            </FirstFooter> */}
      </FirstContainer>
      <SecondContainer>
        <FirstParagraph>
          Already a member?
          <span>
            <Link to="/login">Login</Link>
          </span>
        </FirstParagraph>
        <Header2>Create Account</Header2>
        <FormInput>
          <FirstNameInput type="text"  placeholder="Reference ID(Optional)(*)" value={referenceid} onChange ={(e)=>{setReferenceId(e.target.value)}}/>
          <FirstNameInput type="text" required placeholder="First Name(*)" value={firstName} onChange ={(e)=>{setFirstName(e.target.value)}}/>
          <LastNameInput type="text" required placeholder="Last Name(*)" value={lastName} onChange ={(e)=>{setLastName(e.target.value)}}/>
          <EmailInput type="email" required placeholder="Email Address(*)" value={email} onChange ={(e)=>{setEmail(e.target.value)}}/>
          <PhoneNumber type="text" required placeholder="Phone Number(*)" value={phoneNumber} onChange ={(e)=>{setPhoneNumber(e.target.value)}}  />
          <SelectCountry value={gender} required onChange ={(e)=>{setGender(e.target.value)}} >
            <option>-Gender-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </SelectCountry>
          <Password type="password" required placeholder="Input Password(*)" value={password} onChange ={(e)=>{setPassword(e.target.value)}}/>
          <ConfirmPassword type="password" required placeholder="Confirm Password(*)"  value={confirmPassword} onChange ={(e)=>{setconfirmPassword(e.target.value)}}/>
          <CheckBoxContainer>
            <CheckBox type="checkbox" required />
            <p>I am 18 years of age or older(*)</p>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckBox type="checkbox" required />
            <p>I Agree to the terms and conditions(*)</p>
          </CheckBoxContainer>
          <Instruction>
            (All fields with (*) are required. Kindly Check to ensure all fields are
            filled properly before Submitting your form.)
          </Instruction>
          <ButtonContainer>
            <Button>Register</Button>
          </ButtonContainer>
        </FormInput>
      </SecondContainer>
    </MainContainer>
  )
}

export default Register;

const Button = styled.div`
background-color: #a60a0a;
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
    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FirstContainer = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 44%;
  /* flex-wrap: wrap; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
  height: 70vh;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
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
`

const EmailInput = styled.input`
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