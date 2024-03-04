import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function Detail({currentId, close}) {
  const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/"
  const movieDetailBaseUrl1 = "?api_key=5b26c0a21b65471131aaa1fc37a259a6"

  const GetMovieDetail = axios.get(`${movieDetailBaseUrl}${currentId}${movieDetailBaseUrl1}`);


    const [BG, setBG] = useState('')
    const [info, setInfo] = useState('')
    const getMovieDetail=()=>{
        GetMovieDetail.then(resp=>{
         // console.log(resp.data)
          setInfo(resp.data)
          setBG(resp.data.backdrop_path)
        })
      }

      useEffect(()=>{
        getMovieDetail()
    },)

  return (
   <>
    <div className='w-[98.9vw] h-screen flex items-center bg-cover bg-center bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + BG})` }} >
      <div>
      <FontAwesomeIcon onClick={() => {close(false)}}  className=' absolute z-10 bg-red-600 text-black p-3 rounded-[10px] top-10 right-10 ' icon={faClose} />
      </div>
      <div className=' bg-black pl-3 bg-opacity-20 backdrop-blur-[3px] ml-5 py-3 rounded-lg w-2/5' >
       <h1 className='text-7xl font-kalnia ' > {info.title} </h1>
       <h3 className='font-semibold font-anta mt-1' > {` "${info.tagline}" `} </h3> 
       <h2 className='font-anta pb-1 ' > {`Rating - ${(info.vote_average)}/10`} </h2> 
       <div className='flex pb-3  ' > 
         <div className='font-anta' > 
        <p className='mr-3 md:mr-1 ' >Genre -</p> 
          </div> 
          <p  > {info.genres?.map(genre => genre.name).join(', ')} </p> 
          <p className='pl-14' > {`Runtime - ${info.runtime} Minutes`} </p> 
      </div> 
       <p className='font-poppins' > {info.overview} </p>
      </div>
    </div>
   </>
  )
}

export default Detail
