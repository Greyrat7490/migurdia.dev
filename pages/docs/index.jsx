import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Navbar from '../../components/Navbar.jsx'
import SlimeBG from '../../components/Slime-BG.jsx'

const Container = styled.div`
  & {
    display: grid;
    margin-left: 25vw;
    margin-top: 15vh;
    font-size: 40px;
  }

  & h1 {
    font-size: 70px;
    font-weight: 100;
    text-transform: uppercase;
    margin-bottom: 0px;
  }
`

export default function index() {
    return (
        <>
            <Head>
                <title> Documentations </title>
            </Head>

            <SlimeBG />
            <Navbar />
            <Container>
                <h1> Documentations </h1>
                <ul>
                    <li><a href="/doc/kernel"> Kernel(OS) </a></li>
                    <li><a href="/doc/physics"> Physics </a></li>
                    <li><a href="/doc/blockchain"> Blockchains </a></li><br />

                    <li><a href="/doc/c"> C </a></li>
                    <li><a href="/doc/cpp"> C++ </a></li>
                    <li><a href="/doc/haskell"> Haskell </a></li>
                    <li><a href="/doc/func-vs-imp"> functional vs imperative </a></li>
                </ul>
            </Container>
        </>
    );
}