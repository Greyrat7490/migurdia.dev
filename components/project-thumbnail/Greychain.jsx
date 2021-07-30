import React from 'react'
import styled from 'styled-components'

const ChainEnd = styled.div`
	& {
		width: 22px;
		height: 38px;
		margin: auto;
		border-radius: 40px;
		border-width: 10px;
		border-style: solid;
		border-color: #eee;
	}

	& div {
		position: absolute;
		margin-left: 2rem;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		font-size: 0.8em;
	}
`

const ChainConnection = styled.div`
	& {
		width: 14px;
		height: 50px;
		margin: -25px auto;
		background-color: #eee;
		border-radius: 16px;
    	filter: drop-shadow( 0 0.2rem 0.6rem rgba( 0, 0, 0, 0.6 ) );
		
		animation: appear 3s infinite ease-in-out alternate;
	}

	@keyframes appear {
		0%, 30% {
			opacity: 0;
			transform: scaleX(-30%) scaleY(-30%);
		}

		40% {
			opacity: 100%;
			transform: scaleX(120%) scaleY(120%);
		}

		55%, 100% {
			transform: scaleX(100%) scaleY(100%);
		}
	}
`


const Container = styled.div`
	& {
		/* position: absolute;
		overflow: hidden;
		clip: auto; */
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
		font-size: 0.45em;
	}

	&:hover {
		animation-play-state: paused;
	}

	.indent {
		text-indent: 1rem;
	}

	.blockchain {
		margin: auto;
		transform: rotateZ(0deg);
	}

	.block1 {
		margin-bottom: 0.4rem;
	}

	.bottom {
		clip-path: inset( 40% 0 0 0 );
		margin-top: -17%;
	}

	.top {
		clip-path: inset( 0 0 40% 0 );
		margin-bottom: -17%;
	}

	hr {
		background-color: #ddd;
		border: 0.25rem solid #ddd;
		border-radius: 1rem;
	}

	.block2 {
		animation: block2 3s infinite ease-in-out alternate;
	}

	@keyframes block2 {
		0% {
			transform: translateX(90%);
			opacity: 0
		}

		20% {
			transform: translateX(-10%);
			opacity: 1
		}

		30%, 100% {
			transform: translateX(0);
		}
	}
`

export default function GreychainThumbnail() {
	return (
		<Container>
			<div className="blockchain">
				<div className="block1">
					<hr/>
					pre: 0xff<br/>
					nonce: 0<br />
					solution: 1<br />
					content:
					<div className="indent">tx_id: 0x0</div>
					<div className="indent">0x0(0) -{'>'} 0x0</div>
					hash: 0xff
					<hr/>
					<ChainEnd className="bottom"></ChainEnd>
				</div>
				<ChainConnection />
				<div className="block2">
					<ChainEnd className="top"></ChainEnd>
					<hr/>
					pre: 0xff<br/>
					nonce: 1627379518487932<br/>
					solution: 85353205<br/>
					content:
					<div className="indent">tx_id: 0x5c8177ac033f3</div>
					<div className="indent">0x0(24) -{'>'} 0x0</div>
					hash: 0x2d5c49c9d5c028fd<hr/>
				</div>
		</div>
	</Container>
	);
}