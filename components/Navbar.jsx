import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    & {
        position: fixed;
        top: 0.55rem;
        text-decoration: none;
    }

    & ul {
        list-style: none;
    }
    
    & li {
        display: inline-block;
        margin-right: 50px;
    }
    
    & a {
        font-size: 1rem;
        text-decoration: none;
        text-shadow: 0px 0px 20px black;
        color: #fff;
    }
    
    & li a::before {
        content: '';
        display: block;
        height: 0.18rem;
        background-color: #fff;
        border-radius: 0.18rem;
        width: 60%;
        transition: transform ease-in-out 350ms, width ease-in-out 450ms;
    }
    
    & a:hover::before {
        transform: translateX(250%);
        width: 0px;
    }
`

export default function Navbar() {
    return (
        <StyledNav className="navbar">
            <ul>
                <li> <a href="/"> Home </a> </li>
                <li> <a href="/projects"> Projects </a> </li>
                <li> <a href="/docs"> Documentations </a> </li>
                <li> <a href="/contact"> Contact </a> </li>
                <li> <a href="/about-me"> About me </a> </li>
            </ul>
        </StyledNav>
    );
}