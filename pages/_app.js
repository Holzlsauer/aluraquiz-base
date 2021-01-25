import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AluraQuiz - Imersão React v2</title>
        <meta name="title" content="AluraQuiz - Imersão React v2"/>
        <meta name="description" content="Um projeto criado com amor durante a Imersão React v2. Base para futuro projeto."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://aluraquiz-base.holzlsauer.vercel.app/"/>
        <meta property="og:title" content="AluraQuiz - Imersão React v2"/>
        <meta property="og:description" content="Um projeto criado com amor durante a Imersão React v2. Base para futuro projeto."/>
        <meta property="og:image" content={db.bg} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
