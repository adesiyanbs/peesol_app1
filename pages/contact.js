import Head from 'next/head'
import Navigation from '../components/nav-bar'
// import Firstpage from '../components/homepage'
import Footer from '../components/footer'
import Contactpage from '../components/contactpage'
// import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Schon Peesol Energy | Solar Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Contactpage />
      
      <Footer />
    </div>
  )
}