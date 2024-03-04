import React from 'react'
import logoD from '../images/disney.png'
import logoM from '../images/marvel.png'
import logoN from '../images/nationalG.png'
import logoP from '../images/pixar.png'
import logoS from '../images/starwar.png'

import VideoD from '../videos/disney.mp4'
import VideoM from '../videos/marvel.mp4'
import VideoN from '../videos/national-geographic.mp4'
import VideoP from '../videos/pixar.mp4'
import VideoS from '../videos/star-wars.mp4'

import { motion } from 'framer-motion' 
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Company() {

    const CompanyList = [
        {
            id:1,
            image:logoD,
            video:VideoD
        },
        {
            id:2,
            image:logoM,
            video:VideoM
        },
        {
            id:3,
            image:logoN,
            video:VideoN
        },
        {
            id:4,
            image:logoP,
            video:VideoP
        },
        {
            id:5,
            image:logoS,
            video:VideoS
        },
    ]

  return (
    <div className='flex gap-2 md:gap-5 p-2 pb-10 px-5 md:px-16 ' >
        {CompanyList.map((item)=> (
            <div className='border-[2px]  hover:scale-110 transition-all shadow-lg shadow-gray-800 cursor-pointer relative duration-300 ease-in-out hover:border-transparent rounded-lg' >
                <img src={item.image} className=' z-10 sticky ' alt="" />
                <motion.video src={item.video} autoPlay loop playsInline muted className='absolute hover:border-transparent opacity-100 z-0  hover:opacity-40 top-0 rounded-md' ></motion.video>
            </div>
        ))}
    </div>
  )
}

export default Company
