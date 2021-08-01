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
        list-style: none;
        padding: 0.4rem;
        font-size: 0.5em;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
    }

    li:first-child {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        animation: line1 5s steps(90, end) infinite;
    }


    li:nth-child(2) {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        animation: line2 5s steps(90, end) infinite;
    }
 
    @keyframes line1 {
        0% { 
            width: 0;
        }

        20%, 40% {
            width: 4rem;
        }

        60%, 80% {
            width: 40%;
        }
        
        100% {
            width: 100%;
        }        
    }

    @keyframes line2 {
        0%, 20% { 
            width: 0;
        }
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
            <ul className="text">
                <li>booting...</li>
                <li>Welcome to HaiirOS!</li>
            </ul>
        </Terminal>
    );
}