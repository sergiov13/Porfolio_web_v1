import styled from 'styled-components';
import {FaTimes}  from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.35s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0': '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`;


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color:#fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    z-index: -1;

    @media screen and (max-width: 820px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color:#01bf71;
        transition: 0.1s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SideBarRoute = styled.div`
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 5px;
    padding:12px 60px;
    font-size: 18px;
    /* line-height: 1; */
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    justify-content: center;

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

// export const SideBarRoute = styled.div`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 16px 50px;
//     color: #010606;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606;
//     }
// `

