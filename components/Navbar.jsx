import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    & {
        position: fixed;
        top: 10px;
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
        font-size: 20px;
        text-decoration: none;
        text-shadow: 0px 0px 20px black;
        color: #fff;
    }
    
    & li a::after {
        content: '';
        display: block;
        height: 5px;
        background-color: #fff;
        width: 0%;
        transition: all ease-in-out 250ms;
    }
    
    & a:hover::after {
        width: 100%;
    }
`

export default function Navbar() {
    return (
        <StyledNav>
            <ul>
                <li> <a href="/"> Home </a> </li>
                <li> <a href="/projects"> Projects </a> </li>
                <li> <a href="#"> GitHub </a> </li>
                <li> <a href="#"> Contact </a> </li>
                <li> <a href="#"> About me </a> </li>
            </ul>
        </StyledNav>
    );
}



