import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: rgb(255, 184, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid rgb(38, 38, 3);
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid #007bff;
  }

  @media (max-width: 768px){
    margin-right: 5px;
    width: 100%;
    }

`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid rgb(38, 38, 3);
  font-size: 16px;
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    border: 2px solid rgb(0, 168, 82);
  }
`;

const Title = styled.span`
margin-top: 20px;
color: rgb(5 143 72);
font-size: 3em;
font-weight: 900;
`
const Desc = styled.p`
color: #222222;
font-size: 20px;
margin-bottom: 20px;
font-weight: 700;
`
const FormWrapper = styled.div`
margin: 0px 20px;
`

const Button = styled.button`
    margin: 20px 0;
    padding: 12px 32px;
    border-radius: 8px;
    border: none;
    background-color:rgb(0, 168, 82);
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    width: 100%;
    cursor: pointer;
    &:hover {
    background-color: #323232;
    }



`;


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Container>
        <Title>
            Contact us
        </Title>
        <Desc>
            We would like to hear from you!
        </Desc>
      <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          rows="5"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>
          <Button>Submit</Button>
     </form>
     </FormWrapper>
     
    </Container>
  );
};

export default Contact;
