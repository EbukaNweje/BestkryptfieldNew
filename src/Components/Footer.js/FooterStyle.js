import styled from "styled-components";

export const FirstLine = styled.div`
width: 70%;
height: 30vh;
display: flex;
flex-direction: column;

@media Screen and (max-width: 1280px){
    width: 80%;
}
`;
export const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver;
`;
export const H4 = styled.div`
color:#012C6D;
font-size: 16px;
margin-left: 7px;
`;
export const NeedHelp = styled.div`
font-size: 15px;
color: grey;
letter-spacing: 0.2rem;
font-family: poppins, monospace;
`;
export const Need = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 35px 0;

`;
export const Mail = styled.div`
width: auto;
display: flex;
align-items: center;
margin-left: 30px;
color:#012C6D;

`;


export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

/* margin-top: 30px; */
padding: 20px 0;
`;
export const H1 = styled.div`
color: #fff;
font-weight: bold;
margin: 30px 0;
font-size: 30px;

@media Screen and (max-width: 768px){
    font-size: 20px;
    margin-left: 5px;
}
`;
// export const Social = styled.div`
// width: 60%;
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin: 15px 0;
// `;
// export const Img = styled.div`
// /* color: #0459B9; */
// color: #fff;

// @media Screen and (max-width: 768px){
//     width: 35px;
//     height: 35px;
// }
// `;

export const Line3 = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
margin: 45px 0 15px 0;

@media screen and (max-width: 1280px){
    display: flex;
    width: 80%;
    /* background-color: red; */
  }


@media Screen and (max-width: 768px){
    flex-wrap: wrap;
}
`;
export const Col1 = styled.div`
width: 35%;
display: flex;
flex-direction:column;
/* justify-content: center; */
/* align-items: center; */
color: white;
font-weight: bold;
font-size: 13px;
line-height: 25px;

a{
    color: white;
    text-decoration: none;
    :hover{
        text-decoration: 1px underline white;
    }
}
@media Screen and (max-width: 425px){
    font-size: 13px;
}
`;
export const Col2 = styled.div`
width: 35%;
display: flex;
flex-direction:column;
/* justify-content: center; */
/* align-items: center; */
color: white;
font-weight: bold;
font-size: 13px;
line-height: 25px;
a{
    color: white;
    text-decoration: none;
    :hover{
        text-decoration: 1px underline white;
    }
}
@media Screen and (max-width: 425px){
    font-size: 13px;
    width: 40%;
}
`;
export const Col3 = styled.div`
width: 35%;
display: flex;
flex-direction:column;
/* justify-content: center; */
/* align-items: center; */
color: white;
font-weight: bold;
font-size: 13px;
line-height: 25px;

a{
    color: white;
    text-decoration: none;
    :hover{
        text-decoration: 1px underline white;
    }
}

@media screen and (max-width: 426px){
    /* display: flex;
    flex-direction: row;
    width: 90%; */
    font-size: 13px;

  }
`;
export const Line4 = styled.div`
width: 45%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-top: 20px;
line-height: 25px;
`;

export const P = styled.div`
color: white;
font-weight: 500;
font-size: 13px;
`;
export const H2 = styled.div`
color: #E5AC44;
font-weight: bold;
margin: 10px 0;
`;
export const Input = styled.input`
    width: 400px;
    height: 35px;
    border: 1px solid #003C58;
    outline: none;
    border-radius: 2.5px;
    margin: 10px 0;
    padding: 0 10px;

    @media Screen and (max-width: 768px){
        width: 300px;
    }
    @media Screen and (max-width: 375px){
        width: 270px
    }
`;
export const Button = styled.div`
width: 30%;
background-color: #0459B9;
margin-left: 15px;
padding: 10px 10px;
border-radius: 5px;
color: white;
text-align: center;
font-weight: 500;
font-size: 16px;
    :hover{
        cursor: pointer;
        transition: all 400ms;
    }

    @media Screen and (max-width: 768px){
        width: 75%;
    }
`;
export const Image = styled.div`
  
`
export const Imag = styled.img`
    width: 200px;
    @media Screen and (max-width: 426px){
    width: 100px;
  }
`
export const Footer2=styled.div`
   width :70%;

   @media Screen and (max-width: 1280px){
    width: 80%;
   }
`
export const Cryp= styled.div`
    
`