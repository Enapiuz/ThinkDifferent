import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Think Different</title>
        <meta name="description" content="Notepad that makes your brain blow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <textarea className={styles.mainText} autoFocus></textarea>
    </>
  )
}
