import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Rubik', 'fira sans';
        font-size: 20px;
    }

  body {
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #E1DDDC;
  }
`

const theme = {
    colors: {
        primary: '#fff',
    },
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/static/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}