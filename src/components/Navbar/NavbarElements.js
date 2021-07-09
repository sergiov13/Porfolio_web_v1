import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background-color: ${({scrollNav}) => (scrollNav ? 'rgba(0,0,0,0.9)' : 'transparent')};
    height:80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 3;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavLogo = styled.div`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 820px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 820px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #35bdb0;
    }
`;

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;

    @media screen and (max-width: 820px){
        display: none;
    }
`

// export const NavBtnLink = styled.div`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 10px 22px;
//     color: #010606;
//     font-size: 16px;
//     outline: none;
//     border:none ;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606
//     }
// `

export const NavBtnLink = styled.div`
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 4px;
    padding: 0.75rem 1rem;
    font-size: 13px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);


    height: ${({name}) => (name === 'message' ? '200px' : '')};

    &:hover,
    &:focus,
    &:active {
    background-color: rgba(100, 255, 218, 0.1) ;
    outline: none;
    }
    &:after {
    display: none !important;
    }
`
