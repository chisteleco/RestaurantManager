import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Página principal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our restaurant
        </h1>

        
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Reservations &rarr;</h2>
            <p>Access to the reservations center</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Personnel</h2>
            <p>Access to the personnel data</p>
          </a>
          
          <Link   href='/supplies'>
          <a
          
            className={styles.card}
          >
            <h2>Supply management &rarr;</h2>
            <p>Access to the supply management page</p>
          </a>
          </Link>  
          <Link  href='/finances/financialdata'>
            <a className={styles.card}>
              <h2>Finances</h2>
              <p>Access to the financial resources of the company</p>
            </a>
         </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright by XXX. 2022.
      </footer>
    </div>
  )
}
