import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import logo from '../../images/logo.svg'

const Navbar = ({ toggle }) => {
  const [scrollNav, SetScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 70) {
      SetScrollNav(true)
    } else {
      SetScrollNav(false)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  
  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer >
            <NavLogo to="" onClick={toggleHome}>
              <img src={logo} alt={'Test1'} width="40" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-81}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="experience"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Experience
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {ResumeLink}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
