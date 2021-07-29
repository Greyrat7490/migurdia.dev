import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
    & {
        background-color: #2C2C2C;
        color: #C0C0C0;
    }

    & header {
        padding: 0.3rem;
        text-align: center;
        font-size: 0.55em;
    }

    & ul {
        list-style: none;
        font-size: 0.5em;
        padding: 0;
        margin-left: 0.5rem;
    }

    & li {
        margin-right: 0.8rem;
        display: inline;
    }
`

const Terminal = styled.div`
    & {
        overflow: hidden;
        border-radius: 1rem;
        background-color: black;
        color: fuchsia;
        width: 100%;
        height: 100%;
    }

    .text {
        font-size: 0.5em;
    }
`

export default function HaiirOSThumbnail() {
    return(
        <Terminal>
            <Bar> 
                <header>QEMU</header>
                <ul>
                    <li>Machine</li> 
                    <li>View</li>
                </ul>   
            </Bar>
            <div className="text">
                booting...
            </div>
        </Terminal>
    );
}