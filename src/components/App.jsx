import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import { homeObj, homeObj2 } from './InfoSection/Data';
import Services from './Services';
import Contact from './Contact2';

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
      <InfoSection {...homeObj2} />
      <Services />
      <Contact />
    </>
  );
}

export default App