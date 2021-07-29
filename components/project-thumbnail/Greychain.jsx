import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	& {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: grid;
		place-content: center;
	}
`

const Block = styled.div`
	& {
		font-size: 0.8em;
		width: 9rem;
		height: 6.2rem;
		margin: -0.77rem auto;
		border-radius: 40px;
		border-width: 15px;
		border-style: solid;
		border-color: white;
		display: grid;
		place-content: center;
	}
`

const ChainEnd = styled.div`
	& {
		width: 22px;
		height: 38px;
		margin: auto;
		border-radius: 40px;
		border-width: 10px;
		border-style: solid;
		border-color: white;
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
		width: 16px;
		height: 55px;
		margin: -25px auto;
		background-color: white;
		border-radius: 16px;
    	filter: drop-shadow( 0 0.2rem 0.6rem rgba( 0, 0, 0, 0.6 ) );
	}
`

export default function GreychainThumbnail() {
	return (
		<Container>
			<Block> 
				transaction1<br/> 
				transaction2<br/> 
				transaction3<br/> 
			</Block>
			<ChainEnd> <div>0xabc</div> </ChainEnd>
			<ChainConnection />
			<ChainEnd> <div>0xabc</div> </ChainEnd>
			<Block> 
				transaction1<br/> 
				transaction2<br/> 
				transaction3<br/> 
			</Block>
		</Container>
	);
}