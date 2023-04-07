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
  border: 2px solid #ccc;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid #007bff;
  }
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #ccc;
  font-size: 16px;
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    border: 2px solid #007bff;
  }
`;

const Title = styled.span`
margin-top: 20px;
color: rgb(5 143 72);
font-size: 3em;
font-weight: 500;
`
const Desc = styled.p`
color: white;
font-size: 20px;
margin-bottom: 20px;
`


const Button = styled.button`
    margin: 20px 0;
    padding: 12px 32px;
    border-radius: 8px;
    border: none;
    background-color:rgb(0, 168, 82);
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
    background-color: #0069d9;
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
     
    </Container>
  );
};

export default Contact;
