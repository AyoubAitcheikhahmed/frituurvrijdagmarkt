import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
padding: 80px 60px;
background: #262626;
@media (max-width: 1000px) {
  padding: 70px 30px;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 70px;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`;

 const Link = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
&:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
}
`;

const Title = styled.p`
font-size: 30px;
font-weight: 900;
color: #fff;
margin-bottom: 40px;
`;
const Footer = () => {
  return (
    <Container>
         <Wrapper>
    <Row>
        <Column>
        <Title>Frituur Vrijdagmarkt</Title>
            <Link href="#">Vrijdagmarkt 6, 9000 Gent</Link>
            <Link href="#">0472 56 29 53</Link>
        </Column>
        <Column>
        <Title>Contact Us</Title>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
        </Column>
        <Column>
        <Title>News Letter</Title>
            <Link href="#">Inschrijven</Link>
        </Column>
        <Column>
        <Title></Title>
            <Link href="#">All rights reserved, Recon.</Link>
        </Column>
    </Row>
    </Wrapper> 
    </Container>
  
  )
}

export default Footer


