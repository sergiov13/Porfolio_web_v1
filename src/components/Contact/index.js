import React, { useState } from 'react'
import {
  ContactContainer,
  ContactScreen,
  ContactScreenHeader,
  ContactScreenHeaderLeft,
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
  SectionGroup,
  WaveTop,
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
    <SectionGroup id="contact">
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
                CONTACT INFO : <br />
                Sergioworking247@gmail.com
              </ContactAppContact>
            </ContactScreenBodyItemLeft>
            <ContactScreenBodyItem>
              <form onSubmit={handleSubmit}>
                <div>
                  <ContactAppFormGroup>
                    <ContactAppFormControl
                      id="name"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={formState.name}
                      placeholder="Name"
                    />
                  </ContactAppFormGroup>
                  <ContactAppFormGroup>
                    <ContactAppFormControl
                      id="email"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={formState.email}
                      placeholder="Email"
                    />
                  </ContactAppFormGroup>
                  <ContactAppFormGroupMessage>
                    <ContactAppFormControl
                      id="message"
                      type="text"
                      name="message"
                      onChange={handleChange}
                      value={formState.message}
                      placeholder="Message"
                      cols="25"
                    />
                  </ContactAppFormGroupMessage>
                  <ContactAppFormGroupButtons>
                    <ContactAppFormButton>SEND</ContactAppFormButton>
                  </ContactAppFormGroupButtons>
                </div>
              </form>
            </ContactScreenBodyItem>
          </ContactScreenBody>
        </ContactScreen>
      </ContactContainer>
    </SectionGroup>
  )
}

export default Contact
