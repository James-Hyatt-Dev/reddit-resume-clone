import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Postbox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Postbox */}
      <Postbox />
      {/* Feed */}

    </div>
  )
}

export default Home
