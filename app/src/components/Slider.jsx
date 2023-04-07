import styled from 'styled-components';
import { mobile } from '../responsive'
import backgroundSrc from '../assets/frittur_buiten.jpg'

const Container = styled.div`
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 70vh;
    display: flex;
    ${mobile({
        display: "none"
    })}
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 0.9s ease;
`;

const Slide = styled.div`
    background-image: url(${backgroundSrc});
    background-size:cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
`;

const InfoContainer = styled.div`

    align-items: right;
    flex: 1;
`;

const Title = styled.h1`
    font-size: 3em;
    color: white;
`;
const Desc = styled.p`
color: white;
    margin: 20px 0px;
    font-size: 14px;
    font-weight: 300;`;
const Button = styled.button`
font-weight: 500;
font-size: 50px;
background-color: #ffc01c;
color: white;
padding: 5px 10px;
border: 0;
border-radius: 3px;
transition: all .3s ease-in-out;
&&:hover{
    background-color: #e3a400;
}
`; 
const Slider = () => {
return (
        <Container>
            <Wrapper >
               
                    <Slide>
                    <ImgContainer>
                    </ImgContainer>
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