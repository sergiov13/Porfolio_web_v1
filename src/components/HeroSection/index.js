import React, { useState, useEffect, useRef } from 'react'
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
  ArrowForward,
  ArrowRight,
  Logos,
  WaveBottom,
} from './HeroElements'
import js from '../../images/logo-js.png'
import react from '../../images/logo-react.png'
import gatsby from '../../images/logo-gatsby.png'
import graphql from '../../images/logo-graphql.svg'
import selenium from '../../images/logo-selenium.svg'
import python from '../../images/logo-python.svg'
import Wave from '../Wave'
import { Button } from '../ButtonElement'
import sr from '../Utils/sr'
import { srConfig } from '@config'

const HeroSection = () => {
  const delay = 250; 
  const [isMounted, setIsMounted] = useState(false);
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig(500))
  }, [])

  
  useEffect(() => {

    const timeout = setTimeout(() => setIsMounted(true), delay);
    return () => clearTimeout(timeout);
  }, []);
  
  const content = (
    <>
      <HeroP>Hi! my name is</HeroP>
      <HeroH1>Sergio Villarroel</HeroH1>
      <HeroP>
        I'm a Full Stack Software Engineer focused on building interactive and
        responsive Frontends with dynamic Backends.
      </HeroP>
      <HeroBtnWrapper>
        <Button
          to="About"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          smooth={true}
          duration={500}
          exact="true"
          offset={-80}
        >
          Know More {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
      <Logos>
        <img src={js} alt={'Test1'} width="50" />
        <img src={react} alt={'Test1'} width="50" />
        <img src={python} alt={'Test1'} width="50" />
        <img src={gatsby} alt={'Test1'} width="50" />
        <img src={graphql} alt={'Test1'} width="50" />
        <img src={selenium} alt={'Test1'} width="50" />
      </Logos>
    </>
  )
  return (
    <>
      <HeroContainer>
        <HeroBg></HeroBg>
        <WaveBottom>
          <Wave />
        </WaveBottom>
        <HeroContent ref={revealContainer}>{isMounted ? content : '' }</HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
