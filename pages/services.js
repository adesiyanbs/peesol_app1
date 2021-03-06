import Head from 'next/head'
import Navigation from '../components/nav-bar'
// import Firstpage from '../components/homepage'
import Footer from '../components/footer'
import Servicespage from '../components/servicespage'
// import styles from '../styles/Home.module.css'

export default function Services() {
  return (
    <div>
      <Head>
        <title>Schon Peesol Energy | Solar Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Servicespage />
      
      <Footer />
    </div>
  )
}