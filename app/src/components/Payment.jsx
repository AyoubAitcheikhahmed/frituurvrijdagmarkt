import React from 'react'
import styled from 'styled-components';
import visa from './../assets/visa.png'
import bancontact from './../assets/bancontact.png'
import mastercard from './../assets/master.png'





const Container = styled.div`
    z-index: 1;
    overflow: hidden;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`

    padding: 20px;
    display: flex;
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
`

const Image = styled.img`
    height: 50px;
`


const Text = styled.span`
 font-size: 1.5rem;
  text-align: center;
`


const Payment = () => {
  return (
    <Container>
        <Text>We accepte the following payment methodes:</Text>
            <ImageContainer>
            <Image src={bancontact}/>
            <Image src={mastercard}/>
            <Image src={visa}/>
            </ImageContainer>
    </Container>
  )
}

export default Payment