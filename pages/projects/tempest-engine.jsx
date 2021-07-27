import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SlimeBG from '../../components/Slime-BG.jsx';
import Navbar from '../../components/Navbar.jsx';

const Container = styled.div`
  & {
    display: grid;
    margin-left: 15vw;
    margin-top: 8vh;
    font-size: 40px;
  }

  & h1 {
    font-size: 70px;
    font-weight: 100;
    text-transform: uppercase;
  }
`

export default function tempest_engine() {
    return (
        <>
            <Head>
                <title> Tempest-Engine </title>
            </Head>

            <Navbar />
            <SlimeBG />
            <Container>
                <h1> Tempest-Engine </h1>
                Game Engine written in C++. <br/>
                Uses Vulkan as Graphics API.
                <p>
                Main goal is to show how a game engine works and<br/>
                learn more C++ with practice. Therefore I tried to use<br/>
                as almost no third-party-libraries.
                </p>
                So far used Libraries are only Vulkan (which is of cause very essential),<br/>
                ZLib for decompression in FBX-Files (therefore it is needed) and <br/>
                Freetype for loading ttf-files and converting them to textures.
            </Container>
        </>
    );
}

