import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png'

function Header() {
  return (
    <div className='flex  items-center justify-between px-4 pt-3 bg-red-00 pb-3' >
      <div>
        <h1 className='font-anta text-4xl ' >Cinemania</h1>
      </div>
      <div className='flex gap-5 mr-16  md:gap-8 items-center justify-center ' >
          <div className='flex items-center pr-1' >
          <FontAwesomeIcon className='pr-3 h-[17px]' icon={faHouse} />
          <div className=' text-[19px] hover:underline hidden md:block hover:underline-offset-8 duration-300' >Home</div>
          </div>
          <div className='flex items-center pr-1' >
          <FontAwesomeIcon className='pr-3 h-[17px]' icon={faPlus} />
          <div className=' text-[19px] hover:underline hidden md:block hover:underline-offset-8 duration-300' >Watch List</div>
          </div>
          
          <div className='flex items-center pr-1' >
          <FontAwesomeIcon className='pr-3 h-[17px]' icon={faCirclePlay} />
          <div className=' text-[19px] hover:underline hidden md:block hover:underline-offset-8 duration-300'>Movies</div>
          </div>
          <div className='flex items-center pr-1' >
          <FontAwesomeIcon className='pr-3 h-[17px]' icon={faTv} />
          <div className=' text-[19px] hover:underline hidden md:block hover:underline-offset-8 duration-300'>Series</div>
          </div>
      </div>
      <div>
        <img className='w-[60px] border-white hover:border-2  rounded-full ' src="https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8" alt="" />
      </div>
    </div>
  )
}

export default Header
