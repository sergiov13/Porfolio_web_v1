import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SideBarRoute,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink onClick={toggle}
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Experience
          </SidebarLink>
          <SidebarLink onClick={toggle}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </SidebarLink>
          <SidebarLink onClick={toggle}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </SidebarLink>
          <SideBtnWrap>
            {ResumeLink}
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
