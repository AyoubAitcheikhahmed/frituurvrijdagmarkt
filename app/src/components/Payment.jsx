import React from 'react'
import styled from 'styled-components';

import bancontact from './../assets/bancontact.png'
import cash from './../assets/cash.png'
import belfius from './../assets/belfius.png'
import ing from './../assets/ing.png'
import kbc from './../assets/kbc.png'
import mistercash from './../assets/mistercash.png'



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

    @media (max-width: 768px){
      height: 40vh;
    }
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
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & > div {
      width: 50%;
      padding: 0.5rem;
    }
  }
`;


const Image = styled.img`
    height: 50px;
`


const Text = styled.span`
 font-size: 1.5rem;
  text-align: center;
  @media (max-width: 768px){
    margin: 10px;
    }
`


const Payment = () => {
  return (
    <Container>
        <Text>We accepte the following payment methodes:</Text>
            <ImageContainer>
            <Image src={bancontact}/>
            <Image src={ing}/>
            <Image src={belfius}/>
            <Image src={kbc}/>
            <Image src={cash}/>
            <Image src={mistercash}/>
            </ImageContainer>
    </Container>
  )
}

export default Payment