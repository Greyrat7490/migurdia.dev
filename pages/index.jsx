import React, { Component } from 'react'
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
				<title> Tempest-Dev </title>
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

			<SlimeBG />
			<Navbar />
			<Container>
				<h1>
					<img className="icon" src="static/icon.svg" width="150px" height="150px" />
					Tempest-Dev
				</h1>
				Tempest7490 portfolio website<br />
				<ul>
					<li> Information about my projects</li>
					<li> Documentations about interesting topics</li>
					<li> Info about Languages I like</li>
				</ul>
			</Container>
		</>
	);
}