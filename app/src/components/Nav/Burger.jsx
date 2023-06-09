import {React, useState} from 'react'
import styled from 'styled-components'
import RightNav from './RighNav'


const BurgerMenu = styled.div`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 40px;
    right: 40px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 2;
    display: none;


    @media (max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div{
        width:2rem;
        height: 0.3rem;
        background-color: ${({open }) => open ? '#028642' : '#ecaf14'};
        border-radius: 5px;
        transform-origin: 1px;
        transition:  all 0.3s linear;

        &:nth-child(1){
            transform: ${({open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'}
        }

        &:nth-child(2){
            transform: ${({open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open }) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'}
        }
    }

`

const Burger = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
    

    <BurgerMenu open= {open} onClick = {() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </BurgerMenu>

    <RightNav open= {open}/>
   </>

  )
}

export default Burger