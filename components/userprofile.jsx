import React from 'react'
import './userprofile.css'

export default function Userprofile(){

    return(
    <div className='userprofile'>
        <img src="./assets\images\avatar-jessica.jpeg" alt="user" className='userpic'/>
       <h2>Jessica Randall</h2> 
    <p className='para1'>London, United Kingdom</p>
   <p className='para2'>"Front-end developer and avid reader."</p>
    </div>
    )
}