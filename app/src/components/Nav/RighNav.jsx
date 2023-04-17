import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    align-items: center;
    font-size: 1.5rem;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;

    li{
      cursor: pointer;
      font-weight: 900;
        font-size: 1.3em;
        color: white;
        padding: 18px 10px;
        position: relative;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: white;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s;
        }
        &:hover:before {
            visibility: visible;
            transform: scaleX(1);
            background-color: #ffc01c; 
        }
    }
    
    @media (max-width: 768px){
        flex-flow: column nowrap;justify-content: flex-start;
        position: fixed;
        background-color: rgb(255, 192, 28);
        top:0;
        right:0;
        height: 100vh;
        width:300px;
        padding: 20px;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;

        li {
            &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: white;
                visibility: hidden;
                transform: scaleX(0);
                transition: all 0.3s ease-in-out 0s;
            }
            &:hover:before {
                visibility: visible;
                transform: scaleX(1);
                background-color: #ffc01c; /* new color */
            }
        }
    }
`;






const OrderButton = styled.button`
    background-color: #ffc01c;
    font-size: 1.5em;
    font-weight: 900;
    color: white;
    padding: 5px 10px;
    margin-left: 20px;
    border: 0;
    border-radius: 3px;
    transition: all .3s ease-in-out;
    &&:hover{
        background-color: #e3a400;
    }
`
const RighNav = ({open}) => {
  return (
    <Ul open={open}>
        <li>Home</li>
        <li>Contact</li>
        <OrderButton>ORDER</OrderButton>
    </Ul>
  )
}

export default RighNav