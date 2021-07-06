import React, { useState } from 'react'
import {
  ContactContainer,
  ContactScreen,
  ContactScreenHeader,
  ContactScreenHeaderLeft,
  ContactScreenHeaderButton,
  ContactScreenHeaderButtonClose,
  ContactScreenHeaderButtonMaximize,
  ContactScreenHeaderButtonMinimize,
  ContactScreenHeaderRight,
  ContactScreenHeaderEllipsis,
  ContactScreenBody,
  ContactScreenBodyItem,
  ContactScreenBodyItemLeft,
  ContactAppTitle,
  ContactAppContact,
  ContactAppFormGroup,
  ContactAppFormGroupMessage,
  ContactAppFormGroupButtons,
  ContactAppFormControl,
  ContactAppFormButton,
  InfoWrapper,
  SectionGroup,
  WaveTop
} from './ContactElements'
import Wave from '../Wave'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
   <SectionGroup>
      <WaveTop>
        <Wave />
      </WaveTop>
          <ContactContainer>
            <ContactScreen>
              <ContactScreenHeader>
                <ContactScreenHeaderLeft>
                  <ContactScreenHeaderButtonClose />
                  <ContactScreenHeaderButtonMaximize />
                  <ContactScreenHeaderButtonMinimize />
                </ContactScreenHeaderLeft>
                <ContactScreenHeaderRight>
                  <ContactScreenHeaderEllipsis />
                  <ContactScreenHeaderEllipsis />
                  <ContactScreenHeaderEllipsis />
                </ContactScreenHeaderRight>
              </ContactScreenHeader>
              <ContactScreenBody>
                <ContactScreenBodyItemLeft>
                  <ContactAppTitle>
                    <span>Get In Touch</span>
                  </ContactAppTitle>
                  <ContactAppContact>
                    CONTACT INFO : Sergioworking247@gmail.com
                  </ContactAppContact>
                </ContactScreenBodyItemLeft>
                <ContactScreenBodyItem>
                  <div class="app-form">
                    <ContactAppFormGroup>
                      <ContactAppFormControl
                        class="app-form-control"
                        placeholder="NAME"
                      />
                    </ContactAppFormGroup>
                    <ContactAppFormGroup>
                      <ContactAppFormControl
                        class="app-form-control"
                        placeholder="EMAIL"
                      />
                    </ContactAppFormGroup>
                    <ContactAppFormGroupMessage>
                      <ContactAppFormControl
                        class="app-form-control"
                        placeholder="MESSAGE"
                      />
                    </ContactAppFormGroupMessage>
                    <ContactAppFormGroupButtons>
                      <ContactAppFormButton >
                        SEND
                      </ContactAppFormButton>
                    </ContactAppFormGroupButtons>
                  </div>
                </ContactScreenBodyItem>
              </ContactScreenBody>
            </ContactScreen>
          </ContactContainer>
        </SectionGroup>
  )
}

export default Contact
