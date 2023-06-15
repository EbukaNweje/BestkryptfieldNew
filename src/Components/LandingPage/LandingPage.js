import React from 'react';
import Hero1 from "./Hero1"
import Hero2 from "./Hero2"
import Hero3 from "./Hero3"
import Hero4 from "./Hero4"
import Hero5 from "./Hero5"
import Hero7 from "./Hero7/Hero7"
import Hero8 from "./Hero8"
import HeroAssets from "./HeroAssets/HeroAssets"
import Hero6 from "./Hero6/Hero6"
import Discover from "./Discover/Discover"
import styled from "styled-components"

const LandingPage = () => {
  return (
    <Container>
      <Hero1/>
      <Hero2/>
      <Discover/>
      <HeroAssets/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Hero7/>
      <Hero8/>
    </Container>
  )
};

export default LandingPage;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
`;