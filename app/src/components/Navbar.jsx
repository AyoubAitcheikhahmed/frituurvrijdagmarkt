import styled from 'styled-components';
import { mobile } from '../responsive'
import logoSrc from '../assets/logo_small.png';

const Container = styled.div`
    z-index: 2;
    position: sticky;
top: 0;
    padding: 20px 0;
    background: #00a852;
    box-shadow: 0px 8px 16px -5px rgba(0,0,0,0.49);
    ${mobile({
        height: "50px",
        padding: "5px 0px"
        })}
`
const Wrapper = styled.div`
    // align-items: center;
    // padding: 10px 80px;
    display: flex;
    ${mobile({
        padding: "10px 0px",
        })}
`
const Left = styled.div`
    display: flex;
    flex:1.5;
    align-items: center;
    justify-content: center;
`;



const Right = styled.div`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    color: white;
    * + * {
        margin-left:15px;
    }
    ${mobile({
        flex: 1,
        justifyContent: "center"
        })}
`;

const MenuItem = styled.span`
    position:relative;
    font-size: 1.5em;
    &:after{
        width: 0;
        bottom: -5px;
        left:0;
        position:absolute;
        content: '';
        border-radius: 3px;
        height: 4px;
        background-color: #ffc01c;
        transition: width .3s ease-in-out;
    }
    &:hover{
      
        // display:inline-block;
        // border-bottom:3px solid #ffc01c;
        // padding-bottom:3px;
        &:after{
            width: 100%;
        }
    }
`

const OrderButton = styled.button`
    background-color: #ffc01c;
    font-size: 1.5em;
    color: white;
    padding: 5px 10px;
    border: 0;
    border-radius: 3px;
    transition: all .3s ease-in-out;
    &&:hover{
        background-color: #e3a400;
    }
`

const Logo = styled.img`
    width: 160px;
    margin: 5px;
    cursor: pointer;
    display: flex;
    ${mobile({
        width: "100px",
        height: "30px",
        })}
`;


const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                  <Logo src={logoSrc} />
                </Left>
                <Right>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <OrderButton>ORDER</OrderButton>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar