import React from 'react'
import Icon1 from '../../images/logo-react.png'
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
              <ServicesH2>Something Something</ServicesH2>
              <ServicesP>
                I provericed efficient and nice pages with this technologies
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon1} />
              <ServicesH2>QA Automation</ServicesH2>
              <ServicesP>
                Selenioum and all that shit you know its pretty cool to make
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon1} />
              <ServicesH2>Backend</ServicesH2>
              <ServicesP>
                This is also my sauce I can do front and back now biatch
                
              </ServicesP>
            </ServicesCard>
          </ServiceWrapper>
        </ServicesH1>
      </ServicesContainer>
    </>
  )
}

export default Services
