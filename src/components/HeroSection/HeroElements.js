import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: linear-gradient(to top right, #233554 0%, #0a192f 100%) #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* Add :before styles */
    :before{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(to top right, #233554 0%, #0a192f 100%) #0a192f;
    }


`


export const HeroBg = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 10px 24px;
    display: flex;
    flex-direction: column;
    align-items: Left;
    justify-content: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
        padding: 40 0 0 0px;
    }
    @media screen and (max-width: 600px) {
        justify-content: center;
        align-items: center;
        padding: 40 0 0 0px;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: Left;

    @media screen and (max-width: 768px) {
        justify-content: center;
        font-size: 34px;
    }

    @media screen and (max-width: 480px) {
        justify-content: center;
        font-size: 28px;
    }
`
export const HeroH4 = styled.h4`
    color: #fff;
    font-size: 18px;
    text-align: left;

    @media screen and (max-width: 768px) {
        padding: 80px 0 0 0;
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: Left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const Logos = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 90px;
    margin: 100px 0;
    justify-items: center;
    
    @media (max-width: 820px) {
         grid-template-columns: repeat(3, 0.5fr);
         padding: 5px ;
         grid-gap: 50px;
    }
`

export const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
    z-index: 2;
`