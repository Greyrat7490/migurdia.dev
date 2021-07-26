import React, { Component } from 'react'
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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png" />
                <link rel="manifest" href="static/favicons/site.webmanifest" />
                <link rel="mask-icon" href="static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <link href="https://fonts.googleapis.com/css?family=Rubik|Fira+Sans|Open+Sans|Noto+Sans|Oxygen|Nunito|Roboto&display=swap" rel="stylesheet" />
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
