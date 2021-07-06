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
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            About
          </SidebarLink>
          <SidebarLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Experience
          </SidebarLink>
          <SidebarLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="Contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Contact
          </SidebarLink>
          <SideBtnWrap>
            <SideBarRoute to="/signin"></SideBarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
