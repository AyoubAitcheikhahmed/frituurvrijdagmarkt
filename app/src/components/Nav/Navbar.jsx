import React from 'react'
import logoSrc from '../../assets/logo_small.png';
import styled from 'styled-components';
import RightNav from './RighNav'
import Burger from './Burger';

const Nav = styled.nav`
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
flex-direction: row;
z-index: 2;
position: sticky;
top: 0;
padding: 20px 0;
background: #00a852;
box-shadow: 0px 8px 16px -5px rgba(0,0,0,0.49);


.logo img{
    padding: 10px 10px;
    height: 80px;
    
}
`
const Navbar = () => {
  return (
    <Nav>
        <div className="logo">
            <img src={logoSrc} alt="logo" />
        </div>
        <Burger />        
    </Nav>
    )
}

export default Navbar