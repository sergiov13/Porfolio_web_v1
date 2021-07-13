import React from 'react'
import {
    StyledText,
    StyleSection,
  } from './ExperienceElements' 


const ExperienceSection = experience => {
 return (
    <StyleSection>
  <section className="section experience" id="experience">
   <div className="section__title">Experience</div>
   <div className="section__content">
    <StyledText>
    <div className="jobs">
     { experience.jobs.map((xp) =>(
         <div className="job">
         <div className="time-place">
          <div className="job__company">{xp.Company}</div>
          <div className="job__time">{xp.Time}</div>
         </div>
         <div className="job__position">{xp.Position}</div>
         <div className="job__used">
           { xp.Techs.map((tech) => (
               <span className="job__used__item">{tech}</span>
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