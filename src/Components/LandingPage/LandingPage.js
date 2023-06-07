import React from 'react';
import Hero1 from "./Hero1"
import Hero2 from "./Hero2"
import Hero3 from "./Hero3"
import HeroAssets from "./HeroAssets/HeroAssets"
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
    </Container>
  )
};

export default LandingPage;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
`;