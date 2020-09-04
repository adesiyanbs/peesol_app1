import Head from 'next/head'
import Navigation from '../components/nav-bar'
// import Firstpage from '../components/homepage'
import Footer from '../components/footer'
import Aboutpage from '../components/aboutpage'
// import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div>
      <Head>
        <title>Schon Peesol Energy | Solar Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

        <Aboutpage />
      
      <Footer />
    </div>
  )
}