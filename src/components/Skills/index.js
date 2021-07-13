import React from 'react'
import {
  StyledText,
  StyleSection,
} from './SkillsElements'

const SkillSection = skills => {
  return (
    <StyleSection>
      <section className="section skills">
        <div className="section__title">Skills</div>
        <div className="section__content">
          <StyledText>
            <div className="skillz__category">
              <div className="skillz__category__label">Languages</div>
              <ul >
                {skills.skills.languages &&
                  skills.skills.languages.map((skill, i) => (
                    <li className="skillz__category__item" key={i}>
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Frameworks</div>
              <ul >
                {skills.skills.frameworks &&
                  skills.skills.frameworks.map((skill, i) => (
                    <li className="skillz__category__item" key={i}>
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Tools</div>
              <ul >
                {skills.skills.tools &&
                  skills.skills.tools.map((skill, i) => (
                    <li className="skillz__category__item" key={i}>
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Testing</div>
              <ul >
                {skills.skills.testing &&
                  skills.skills.testing.map((skill, i) => (
                    <li className="skillz__category__item" key={i}>
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>
          </StyledText>
        </div>
      </section>
    </StyleSection>
  )
}

export default SkillSection
