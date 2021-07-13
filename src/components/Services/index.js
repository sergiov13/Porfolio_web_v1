import React from 'react'
import Icon3 from '../../images/logo-react.png'
import Icon2 from '../../images/logo-selenium.svg'
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

export const Services = () => {
  return (
    <>
      <ServicesContainer id="projects">
        <ServicesH1>
          <ServiceWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1} />
              <ServicesH2>Spotify Rooms</ServicesH2>
              <ServicesP>
                Room where people logged into unique rooms could vote for a song. Implemented Python, Django, Spotify API, React, JS.
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2} />
              <ServicesH2>QA Automation</ServicesH2>
              <ServicesP>
                Web Scrapper implementing Selenium, Python and JS.
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
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
