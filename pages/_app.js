import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sunspotter identifie la ville de France offrant les meilleurs températures du weekend à venir.</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

