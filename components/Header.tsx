import Image from 'next/image'
import React from 'react'
import RedditLogo from '../public/RedditLogo.png'

function Header() {
  return (
    <div>
        <div className='relative h-10 w-20'>
            <Image src={RedditLogo} layout='fill' objectFit='contain' />
        </div>
    </div>
  )
}

export default Header