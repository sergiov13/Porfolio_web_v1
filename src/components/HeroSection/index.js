import React, { useState }from 'react';
import Video from '../../videos/HeroVideo/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroBtnWrapper, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement'


const HeroSection = () => {
    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Hi! My name is,</HeroH1>
                <HeroH1>Sergio Villarroel </HeroH1>
                <HeroP> Web Developer</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get Started { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> 
            </HeroContent> 
        </HeroContainer>
    )
}

export default HeroSection
