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
} from './NavbarElements'
import logo from '../../images/logo.svg'
import { navLinks } from '../../config'

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
    <a
      className="resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  )

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="" onClick={toggleHome}>
              <img src={logo} alt={'Test1'} width="40" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {navLinks &&
                navLinks.map((item, i) => (
                  <NavItem key={i}>
                    <NavLinks
                      to={item}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-74}
                      key={item}
                    >
                      {item}
                    </NavLinks>
                  </NavItem>
                ))}
            </NavMenu>
            <NavBtn>{ResumeLink}</NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
