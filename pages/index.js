import Head from 'next/head'
import 'bulma';
import App from '../components/App';

export default function Home() {
  return (
    <div>
      <Head>
        <title>InstaCutter</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
    </div>
  )
}
