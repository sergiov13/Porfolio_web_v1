import React, {useRef, useEffect} from 'react'
import {
  StyledText,
  StyleSection,
} from './SkillsElements'
import sr from '../Utils/sr';
import { srConfig } from '@config';

const SkillSection = skills => {

  const revealContainerFirst = useRef(null);
  const revealContainerSec = useRef(null);
  
  useEffect(() => {
    sr.reveal(revealContainerFirst.current, srConfig());
    sr.reveal(revealContainerSec.current, srConfig());
  }, []);


  return (
    <StyleSection >
      <section className="section skills" id="Experience" >
        <div className="section__title" ref={revealContainerFirst}>Skills</div>
        <div className="section__content" ref={revealContainerSec}>
          <StyledText>      
          {skills.skill.map((sk, n) =>(
            <div className="skillz__category" key={n}>
              <div className="skillz__category__label" key={n}>{Object.keys(sk)[0]}</div>
              <ul >
                 {Object.values(sk)[0].map((skill, i) => (
                    <li className="skillz__category__item" key={i}>
                      {skill}
                    </li>
                  ))} 
              </ul>
            </div>
          ))}
          </StyledText>
        </div>
      </section>
    </StyleSection>
  )
}

export default SkillSection
