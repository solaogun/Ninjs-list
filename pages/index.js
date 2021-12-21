import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        {/* <Navbar /> */}
        <h1 className={styles.title}> HomePage</h1>
        <p className={styles.text}>Lorem Ipsun dolor sit amet consectur adipisicing elit numquam</p>
        <p className={styles.text}>Lorem Ipsun dolor sit amet consectur adipisicing elit numquam</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninjas</a>
        </Link>
        {/* <Footer /> */}
      </div>
    </>
  )
}
