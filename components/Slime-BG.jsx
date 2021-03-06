import React from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
    & {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
`

export default function SlimeBG() {
    return (
        <StyledSvg className="bg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100vw" height="100vh" preserveAspectRatio="none" viewBox="0 1 1920 1080">
            <defs>
                <linearGradient id="linear-gradient" x1="0.997" y1="0.851" x2="0" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#eb64b0"/>
                <stop offset="1" stopColor="#5e00ec"/>
                </linearGradient>
            </defs>
            <path id="bg-path" data-name="bg-path" d="M0,0H974.774s394.326-14.211,236.6,164.211S1626.2,266.842,1626.2,266.842s293.378-34.9,293.378,86.842v570s-589.912,277.9-921.145,93.158S0,855.789,0,855.789Z" transform="translate(0 0.268)" fill="url(#linear-gradient)"/>
        </StyledSvg>
    );
}
