import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import axios from 'axios'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Detail from './Detail'
const screenWidth = window.innerWidth;


function Slider() {
  const [currentId, setCurrentId] = useState('1096197')

  const [movieList, setmovieList] = useState([]);
  const elementRef=useRef()

  useEffect(()=>{
      getTrendingMovies()
  },[])

  const getTrendingMovies=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
     // console.log(resp.data.results)
      setmovieList(resp.data.results)
    })
  }

  const sliderRight = (element) => {
    element.scrollLeft+=screenWidth-90
  }  
  const sliderLeftt = (element) => {
    element.scrollLeft-=screenWidth-90
  }  
  const getId = (id) => {
    console.log(id)
    setCurrentId(id)
  }

  const [showDetail, setShowDetail] = useState(false)
  const Clicked = () => {
    setShowDetail(true)
  }
  const close = () => {
    setShowDetail(false)
  }

  return (
<div className='relative  ' >
  <div className='absolute z-50 -top-[86px] ' >
   { showDetail && <Detail Clicked={Clicked} close={close} currentId={currentId}  /> }
  </div>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef} >
        <FontAwesomeIcon className='text-white hidden z-1 md:block text-[35px] absolute mx-[-40px] mt-[135px] cursor-pointer scroll-smooth ' onClick={()=> sliderLeftt(elementRef.current)} icon={faChevronLeft} />
        <FontAwesomeIcon className='text-white hidden md:block text-[35px] absolute mx-[35px] mt-[135px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)} icon={faChevronRight} />
       {movieList.map((item)=>(
        <img 
        onClick={()=>{
          getId(item.id)
          setShowDetail(true)
         console.log(item)
        }}
        key={item.id} src={IMAGE_BASE_URL+item.backdrop_path} 
        className='md:min-w-full md:h-[340px] h-[180px] border-transparent border-4 hover:border-white hover:border-4  object-cover object-left- mr-14 md:mr-10 rounded-md' />
       ))}
    </div>
</div>

  )
}

export default Slider
