import styled from 'styled-components'

export const SectionGroup = styled.div`
    background-color: #f9f9f9;
    height: 720px;
    background-size: cover;
    display: flex;
    grid-template-rows: 300px auto;
    padding: 0 30px;
    grid-gap: 20px;
    position: relative;
    z-index: 1;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        height: 820px;
    }
`

export const ContactContainer = styled.div`
    
`

export const ContactBg = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const InfoWrapper =styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const SectionTitleGroup = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h3`
    color: #0f0f0f;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

export const SectionText = styled.p`
    color: #0f0f0f;
`

export const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

export const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

// export const Input = styled.input`
//   font-size: 18px;
//   padding: 10px;
//   margin: 10px;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
//   ::placeholder {
//     color: palevioletred;
//   }
// `;


 export const Input = styled.input`
   position: relative;
   background: #64ffda;
   width: 100%;
   border: 1px;
   padding: 20px 0 25px;
   margin-bottom: -10px;
   font-size: 1.5em;
   line-height: 1.3;
   color: #004079;
   resize: none;
   display: block;
   overflow: hidden;
   box-sizing: padding-box;
   transition: all 0.25s ease;
&:hover,
    &:focus,
    &:active {
    background-color: rgba(100, 255, 218, 0.1) ;
    }
    &:after {
    display: none !important;
    }
 `
