import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Postbox from '../components/PostBox'
import Feed from '../components/Feed'
const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Postbox */}
      <Postbox />
      {/* Feed */}
      <Feed />
    </div>
  )
}

export default Home
