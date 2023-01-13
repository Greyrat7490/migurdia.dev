import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Navbar from '../components/Navbar.jsx'
import SlimeBG from '../components/Slime-BG.jsx'

const Container = styled.div`
  & {
    display: grid;
    margin-left: 25vw;
    margin-top: 25vh;
    font-size: 40px;
  }

  & h1 {
    font-size: 70px;
    font-weight: 100;
    text-transform: uppercase;
  }
`

export default function index() {
    return (
        <>
            <Head>
                <title> Contact </title>
            </Head>

            <SlimeBG />
            <Navbar />
            <Container>
                <h1>Contact</h1>
                <ul>
                    <li> Email: kevinschaperjahn13@gmail.com </li>
                    <li><a href="https://github.com/Greyrat7490"> My Github profile </a></li>
                </ul>
            </Container>
        </>
    );
}
