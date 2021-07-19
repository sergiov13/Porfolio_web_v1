import React, { useState, useEffect, useRef } from 'react'
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
import sr from '../Utils/sr';
import { srConfig } from '@config';

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

  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formState
      })
    }).then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <SectionGroup id="Contact">
      <WaveTop>
        <Wave />
      </WaveTop>
      <ContactContainer ref={revealContainer}>
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
              <form name="contact"  method="POST" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden"  name="form-name" value="contact" />               
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
                      type="email"
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
