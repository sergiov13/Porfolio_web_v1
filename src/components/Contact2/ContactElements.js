import styled from 'styled-components'

export const SectionGroup = styled.div`
    background: linear-gradient(to top right, #233554 0%, #0a192f 100%) #0a192f;
    height: 720px;
    background-size: cover;
    display: flex;
    /* grid-template-rows: 300px auto; */
    padding: 0 30px;
    /* grid-gap: 20px; */
    position: relative;
    z-index: 1;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        height: 820px;
    }
`

export const ContactContainer = styled.div`
  flex: 0 1 700px;
  margin: auto;
  padding: 130px 0 0 0;
  @media screen and (max-width: 600px) {
    padding: 40px;
  }
`

export const ContactScreen = styled.div` 
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;


 :after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

@media (max-width: 480px) {
  justify-content: center;
  align-items: center;
      
  }

`

 export const ContactScreenHeader = styled.div `
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

export const ContactScreenHeaderLeft = styled.div`
  margin-right: auto;
`

export const ContactScreenHeaderButton = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
`

export const ContactScreenHeaderButtonClose = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
  background: #ed1c6f;
`

export const ContactScreenHeaderButtonMaximize = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
  background: #e8e925;
`

export const ContactScreenHeaderButtonMinimize = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
  background: #74c54f;
`

export const ContactScreenHeaderRight = styled.div`
  display: flex;
`

export const ContactScreenHeaderEllipsis = styled.div`
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
`

export const ContactScreenBody = styled.div`
  display: flex;
`

export const ContactScreenBodyItem = styled.div`
  flex: 1;
  padding: 35px;
  width: fill;
`

export const ContactScreenBodyItemLeft = styled.div`
  display: flex;
  padding: 30px;
  width: auto;
  flex-direction: column;
  
  /* @media (max-width: 480px) {
  justify-content: center;
  align-items: center;
  padding: 10px ;
  size: 50%;
  } */

`

export const ContactAppTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #35bdb0;
  font-size: 34px;

 :after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #35bdb0;
 }
`

export const ContactAppContact = styled.div`
  margin-top: auto;
  font-size: 15px;
  color: #35bdb0;
`

export const ContactAppFormGroup = styled.div`
  margin-bottom: 15px;
`

export const ContactAppFormGroupMessage = styled.div`
  margin-top: 40px;
`

export const ContactAppFormGroupButtons = styled.div`
  margin-bottom: 0;
  text-align: right;
`

export const ContactAppFormControl = styled.input`
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
  ::placeholder {
  color: #666;
}
:focus {
  border-bottom-color: #ddd;
}
`

export const ContactAppFormButton = styled.button`
  padding: 25px 15px 0 0;
  background: none;
  border: none;
  color: #35bdb0;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  :hover {
  color: #b9134f;
}
`
export const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`