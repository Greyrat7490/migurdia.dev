import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Navbar from '../components/Navbar.jsx'
import SlimeBG from '../components/Slime-BG.jsx'

const Container = styled.div`
  & {
    display: grid;
    margin-left: 25vw;
    margin-top: 20vh;
    font-size: 40px;
  }

  & h1 {
    font-size: 70px;
    font-weight: 100;
    text-transform: uppercase;
  }

  .icon {
    margin-left: -150px;
    margin-bottom: -40px;
    filter: drop-shadow( 2px 8px 15px rgba( 0, 0, 0, .25 ) );
  }
`

export default function index() {
    return (
        <>
            <Head>
                <title> About me </title>
            </Head>

            <SlimeBG />
            <Navbar />
            <Container>
                <h1>
                    About me
                </h1>
            </Container>
        </>
    );
}