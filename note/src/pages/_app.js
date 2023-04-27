import '@/styles/globals.css'
import {firebaseConfig} from './config-fire.js' //importar conf de farebase

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
