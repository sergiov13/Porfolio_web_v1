import React, { useState } from 'react'
import Wave from '../Wave'
import {
  SectionGroup,
  WaveTop,
  SectionTitle,
  SectionText,
  InfoWrapper,
  Input,
  ImgBg,
  ContactBg,
  ContactContainer,
} from './ContactElements'


const Section = () => {
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
        <InfoWrapper>
          <SectionTitle>Get in touch:</SectionTitle>
          <form onSubmit={handleSubmit}>
            <SectionText>
              <Input
               
              />
            </SectionText>
            <SectionText>
              <Input
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="Email"
              />
            </SectionText>
            <SectionText>
              <Input
                id="message"
                type="text"
                name="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="Message"
                cols="25"
              />
            </SectionText>
          </form>
        </InfoWrapper>
    </SectionGroup>
  )
}

export default Section
