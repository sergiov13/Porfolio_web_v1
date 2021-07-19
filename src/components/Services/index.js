import React, {useRef, useEffect} from 'react'
import Icon3 from '../../images/logo-react.png'
import Icon1 from '../../images/logo-python.svg'

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServiceWrapper,
  ServicesCard,
} from './ServiceElements'
import sr from '../Utils/sr';
import { srConfig } from '@config';

export const Services = () => {
  const revealContainerFirst = useRef(null);
  const revealContainerSec = useRef(null);
  
  useEffect(() => {
    sr.reveal(revealContainerFirst.current, srConfig());
    sr.reveal(revealContainerSec.current, srConfig());
  }, []);

  return (
    <>
      <ServicesContainer id="Projects">
        <ServicesH1>
          <ServiceWrapper>
            <ServicesCard ref ={revealContainerFirst}>
              <ServicesIcon src={Icon1} />
              <ServicesH2>Spotify Rooms</ServicesH2>
              <ServicesP>
                Room where people logged into unique rooms could vote for a song. Implemented Python, Django, Spotify API, React, JS.
              </ServicesP>
            </ServicesCard>
            <ServicesCard ref={revealContainerSec}>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Photos Porfolio</ServicesH2>
              <ServicesP>
                Made an Interactive portfolio WebPage with diferent artist. With React, JS, Gatsby, Netlify.
              </ServicesP>
            </ServicesCard>
          </ServiceWrapper>
        </ServicesH1>
      </ServicesContainer>
    </>
  )
}

export default Services
