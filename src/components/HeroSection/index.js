import React, { useState } from 'react'
import Video from '../../videos/HeroVideo/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH4,
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

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <WaveBottom>
          <Wave />
        </WaveBottom>
        <HeroContent>
          <HeroH4>Hi! My name is</HeroH4>
          <HeroH1> Sergio Villarroel </HeroH1>
          <HeroP>
            {' '}
            I make things on the internet mainly focused in the backend but able
            to build responsive and interactive UI.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="about"
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
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
