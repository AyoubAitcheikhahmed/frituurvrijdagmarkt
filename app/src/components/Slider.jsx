import styled from 'styled-components';
import { mobile } from '../responsive'
import backgroundSrc from '../assets/frittur_buiten.jpg'

const Container = styled.div`
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 70vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Add this to center vertically */
    height: 100%;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 0.9s ease;
`;

const Slide = styled.div`
    background-image: url(${backgroundSrc});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; /* Add this to center horizontally */
`;

const InfoContainer = styled.div`
    text-align: center; /* Update this to center text */
    @media (max-width: 768px) {
        
    }
`;

const Title = styled.h1`
    font-size: 3em;
    color: white;
`;

const Desc = styled.p`
    color: white;
    margin: 20px 0px;
    font-size: 14px;
    font-weight: 300;
`;

const Button = styled.button`
    font-weight: 900;
    font-size: 50px;
    background-color: #ffc01c;
    color: white;
    padding: 5px 10px;
    border: 0;
    border-radius: 3px;
    transition: all .3s ease-in-out;
    &&:hover {
        background-color: #e3a400;
    }
`;
const Slider = () => {
return (
        <Container>
            <Wrapper >
                    <Slide>
                    <InfoContainer>
                        <Title>Frituur Vrijdagmarkt</Title>
                        <Desc>Fancy tasty french fries? Come along or order online!</Desc>
                        <Button>Order now</Button>
                    </InfoContainer>
                </Slide>          
            </Wrapper>
        </Container>
    )
}

export default Slider