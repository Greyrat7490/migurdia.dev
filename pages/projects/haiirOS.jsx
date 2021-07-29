import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SlimeBG from '../../components/Slime-BG.jsx';
import Navbar from '../../components/Navbar.jsx';

const Container = styled.div`
  & {
    display: grid;
    margin-left: 15vw;
    margin-top: 20vh;
    font-size: 40px;
  }

  & h1 {
    font-size: 70px;
    font-weight: 100;
    text-transform: uppercase;
  }
`

export default function haiirOS() {
	return (
		<>
			<Head>
				<title> HaiirOS </title>
			</Head>

			<Navbar />
			<SlimeBG />
			<Container>
				<h1> HaiirOS </h1>
				Kernel Project written in C.<br />
				Main purpose is to learn C, Assembly-x86 and how Kernels work.
				<p>
					Main resources used are <a href="wiki.osdev.org">OS-dev</a> and some pages
					from Wikipedia<br /> for more theory about some topics.
				</p>
			</Container>
		</>
	);
}

