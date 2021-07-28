import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Navbar from '../components/Navbar.jsx'
import SlimeBG from '../components/Slime-BG.jsx'

const Container = styled.div`
  & {
    display: grid;
    margin-left: 25vw;
    margin-top: 15vh;
    font-size: 2rem;
  }

  & h1 {
    font-size: 3.6rem;
    font-weight: 100;
    text-transform: uppercase;
  }

  .icon {
    margin-left: -9.5rem;
    margin-bottom: -40px;
    filter: drop-shadow( 0px 8px 20px rgba( 0, 0, 0, .4 ) );
  }
`

export default function index() {
	return (
		<>
			<Head>
				<title> Migurdia-Dev </title>
			</Head>

			<SlimeBG />
			<Navbar />
			<Container>
				<h1>
					<img className="icon" src="static/icon.svg" width="150" height="150" />
					Migurdia-Dev
				</h1>
				Greyrat7490 portfolio website<br />
				<ul>
					<li> Information about my projects</li>
					<li> Documentations about interesting topics</li>
					<li> Info about Languages I like</li>
				</ul>
			</Container>
		</>
	);
}