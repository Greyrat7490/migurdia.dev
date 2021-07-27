import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SlimeBG from '../../components/Slime-BG.jsx';
import Navbar from '../../components/Navbar.jsx';

const Container = styled.div`
  & {
    display: grid;
    margin-left: 20vw;
    margin-top: 15vh;
    font-size: 40px;
  }

  & h1 {
    font-size: 70px;
    font-weight: 100;
    text-transform: uppercase;
  }
`

export default function greychain() {
    return (
        <>
            <Head>
                <title> GreyChain </title>
            </Head>

            <Navbar />
            <SlimeBG />
            <Container>
                <h1> GreyChain </h1>
                Blockchain Project written in C++.<br />
                The future of the financesystem are definitly Blockchains.<br />
                They provide a secure, decentralized and fast way to transfer money.
                <p>
                    Blockchains are a extremly complex topic, but are also really interesting.<br />
                    Therefore I decided to try to make my own one for educational reasons.
                </p>
            </Container>
        </>
    );
}

