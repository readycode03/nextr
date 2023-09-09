import Example from '@/components/Example'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Example/>
  <Component {...pageProps} />
  </>
  )
}
