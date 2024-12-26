import React from 'react'
import Userprofile from './userprofile'
import Link from './link'
import Social_medias from './social-medias'
import './home.css'

export default function Home() {
  return (
    <>
    <div className='user'>
    <Userprofile/>
    <Social_medias/>
    </div>
    <Link/>
    </>
  )
}
