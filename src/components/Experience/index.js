import React, {useRef, useEffect } from 'react'
import { StyledText, StyleSection } from './ExperienceElements'
import sr from '../Utils/sr';
import { srConfig } from '@config';

const ExperienceSection = experience => {
  const revealContainerFirst = useRef(null);
  const revealContainerSec = useRef(null);
  
  useEffect(() => {
    sr.reveal(revealContainerFirst.current, srConfig());
    sr.reveal(revealContainerSec.current, srConfig());
  }, []);

  return (
    <StyleSection>
      <section className="section experience" id="Experience">
        <div className="section__title" ref={revealContainerFirst}>Experience</div>
        <div className="section__content" ref={revealContainerSec}>
          <StyledText>
            <div className="jobs">
              {experience.jobs.map((xp,i) => (
                <div className="job" key={xp.Company}>
                  <div className="time-place" key={xp.Company}>
                    <div className="job__company" key={xp.Company}>{xp.Company}</div>
                    <div className="job__time" key={xp.Time}>{xp.Time}</div>
                  </div>
                  <div className="job__position">{xp.Position}</div>
                  <div className="job__used">
                    {xp.Techs.map(tech => (
                      <span className="job__used__item" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </StyledText>
        </div>
      </section>
    </StyleSection>
  )
}

export default ExperienceSection
