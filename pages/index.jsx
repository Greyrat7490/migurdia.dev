import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import SlimeBG from '../components/Slime-BG'
import Icon from '../components/Icon'

const Container = styled.main`
 	& {
		display: grid;
	    margin-left: 25vw;
	    margin-top: 15vh;
	    font-size: 2rem;
	}

	h1 {
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

const GlobalStyle = createGlobalStyle`
	.bg {
		animation: bg 3s forwards ease-out;
	}

	.icon {
		animation: icon 3s forwards;
	}

	.navbar {
		animation: navbar 4s forwards ease-out;
	}

	.header-text {
		display: inline-block;
		animation: header-text 3s forwards cubic-bezier(0, 0, 0.4, 1.5);
	}

	.text {
		opacity: 0.01; // fixes "Largest Contentful Paint" error in lighthouse
		transform: translateY( 60% );
		animation: text 0.5s forwards ease-out;
		animation-delay: 3s;
	}

	ul.text > li {
		opacity: 0;
		transform: translateY( 60% );
	}

	ul.text > li:first-child {
		animation: text 0.5s forwards ease-out;
		animation-delay: 3.1s;
	}

	ul.text > li:nth-child( 2 ) {
		animation: text 0.5s forwards ease-out;
		animation-delay: 3.4s;
	}
	
	ul.text > li:nth-child( 3 ) {
		animation: text 0.5s forwards ease-out;
		animation-delay: 3.7s;
	}

	@keyframes bg {
		0% {
			clip-path: circle( 5% at 50% 50% );
		}

		100% {
			clip-path: circle( 100% at 50% 50% );
		}
	}

	@keyframes icon {
		0%, 40% {
			transform: translateX( -70% );
			clip-path: circle( 0% at 50% 50% );
		}

		45% {
			filter: drop-shadow( 0px 0px 0px rgba( 0, 0, 0, 0 ) );
		}

		70% {
			transform: translateX( -70% );
			clip-path: circle( 100% at 50% 50% );
		}

		100% {
			transform: translateX( 0 );
		}
	}	
	
	@keyframes navbar {
		0%, 70% {
			transform: translateY( -200% );
		}

		85% {
			transform: translateY( 20% );
		}

		95% {
			transform: translateY( -5% );
		}

		100% {
			transform: translateY( 0 );
		}
	}

	@keyframes header-text {
		0%, 80% {
			opacity: 0;
			transform: scale( 50% ) translateX( -50% );
		}

		100% {
			opacity: 1;
			transform: scale( 1 ) translateX( 0 );
		}
	}

	@keyframes text {
		100% {
			opacity: 1;
			transform: translate( 0 );
		}
	}
`


export default function index() {
	return (
		<>
			<Head>
				<title> Migurdia-Dev </title>
			</Head>
			<GlobalStyle />

			<SlimeBG />
			<Navbar />
			<Container>
				<h1>
					<Icon className="icon" />
					<div className="header-text">Migurdia-Dev</div>
				</h1>
				<div className="text">Greyrat7490 portfolio website</div>
				<ul className="text">
					<li> Information about my projects</li>
					<li> Documentations about interesting topics</li>
					<li> Info about Languages I like</li>
				</ul>
			</Container>
		</>
	);
}