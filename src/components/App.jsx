import React, { useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import { homeObj, homeObj2 } from './InfoSection/Data';
import Services from './Services';

const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  }
  return ( 
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObj} />
      <InfoSection {...homeObj2} />
      <Services />
    </Router>
  );
}

export default App