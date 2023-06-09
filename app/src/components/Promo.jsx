import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive'
import backgroundSrc from '../assets/bicky_original.png'


const Container = styled.div`
    z-index: 1;
    overflow: hidden;
    background: rgb(0, 168, 82);
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
        height: 70vh;
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

    flex:1;
`

const Image = styled.img`

@media (max-width: 768px) {
  height: 150px;
}

`

const InfoContainer = styled.div`
    align-items: center;
    display:flex;
    flex-direction: column;
    flex: 1;
    justify-content: center

`;

const Text = styled.span`
    color: white;
    font-size: 3em;
    font-weight: 900;
    margin: 10px;
    @media (max-width: 768px){
        font-size: 1.5em;
        align-items: center;
    }
`
const Desc = styled.p`
color: #ffb800;
font-size: 30px;
font-weight: 700;

@media (max-width: 768px){
        font-size: 1em;
        align-items: center;
    }
`

const Button = styled.button`
font-weight: 900;
font-size: 50px;
background-color: #ffc01c;
color: white;
margin: 20px 0;
padding: 10px 50px;
border: 0;
border-radius: 3px;
transition: all .3s ease-in-out;
&&:hover{
    background-color: #e3a400;
}
@media (max-width: 768px){
        font-size: 1.5em;

    }

`; 

const Promo = () => {
  return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={backgroundSrc}/>
                </ImageContainer>
                <InfoContainer>
                    <Text>STUDENTEN PROMO!</Text>
                    <Desc>Bicky burger + Cola  voor 5 euro</Desc>
                    <Button>Schrijf je in</Button>
                </InfoContainer>
            </Wrapper>
        </Container>
  )
}

export default Promo
