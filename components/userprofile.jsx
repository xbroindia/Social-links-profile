import React from 'react'
import './userprofile.css'
import pic1 from './avatar-jessica.jpeg'

export default function Userprofile(){

    return(
    <div className='userprofile'>
        <img src={pic1} alt="user" className='userpic'/>
       <h2>Jessica Randall</h2> 
    <p className='para1'>London, United Kingdom</p>
   <p className='para2'>"Front-end developer and avid reader."</p>
    </div>
    )
}