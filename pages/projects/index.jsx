import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SlimeBG from '../../components/Slime-BG';
import Navbar from '../../components/Navbar';
import GreychainThumbnail from '../../components/project-thumbnail/Greychain';
import HaiirOSThumbnail from '../../components/project-thumbnail/HaiirOS';

const StyledMain = styled.main`
  & {
	display: grid;
	margin-top: 0;
	font-size: 1.5rem;
  }

  & h1 {
	margin-left: 15vw;
	margin-top: 17vh;
	margin-bottom: 0;
	font-size: 2.3rem;
	font-weight: 100;
	text-transform: uppercase;
  }

  & a {
	color: #fff;
	text-decoration: none;
  }

  & > ul {
	list-style: none;
	margin: 3.5rem;
	margin-left: 12vw;
  }

  & > ul > li {
	display: inline-block;
	margin-right: 3rem;
  }
`

const Container = styled.li`
	& {
		position: relative;
		width: 20rem;
		height: 20rem;	
	}

	& > a {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.thumbnailHeader {
		margin-bottom: 1rem;
		display: grid;
		place-content: center;
		text-shadow: 0 0 2rem rgba( 0, 0, 0, 0.5 );
		transition: all ease-in-out 350ms
	}

	&:hover .thumbnailHeader {
		text-shadow: 0 0 0 rgba( 0, 0, 0, 0.5 );
	}

	.thumbnailDiv {
		width: 100%;
		height: 100%;
		filter: drop-shadow( 0 0 1rem rgba( 0, 0, 0, 0.5 ) );
		transition: all ease-in-out 350ms
	}

	&:hover .thumbnailDiv {
		filter: drop-shadow( 0 0 0 rgba( 0, 0, 0, 0.5 ) );
	}
`

export default function index() {
	return (
		<>
			<Head>
				<title> Projects </title>
			</Head>

			<Navbar />
			<SlimeBG />
			<StyledMain>
				<h1> Projects </h1>
				<ul>
					<Container>
						<a href="/projects/haiirOS"> 
							<header className="thumbnailHeader">HaiirOS</header>
							<div className="thumbnailDiv">
								<HaiirOSThumbnail />
							</div>
						</a>
					</Container>
					<Container>
						<a href="/projects/greychain">
							<header className="thumbnailHeader">Greychain</header>
							<div className="thumbnailDiv">
								<GreychainThumbnail />
							</div>
						</a>
					</Container>
					<Container>
						<a href="/projects/tempest-engine">
							<header className="thumbnailHeader">Tempest-Engine</header>
							<div className="thumbnailDiv">
							</div>
						</a>
					</Container>
				</ul>
			</StyledMain>
		</>
	);
}
