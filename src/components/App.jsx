import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import { homeObj } from './InfoSection/Data';
import SkillSection from './Skills';
import { Skills } from './Skills/Data';
import Services from './Services';
import Contact from './Contact';
import { Experience } from './Experience/Data';
import ExperienceSection from './Experience';

const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  }
  return ( 
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObj} />
      <ExperienceSection {...Experience}/>
      <SkillSection {...Skills }/>
      <Services />
      <Contact />
    </>
  );
}

export default App