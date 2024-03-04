import React from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function MovieCard3({movie, onUpdate, Clicked}) {
  const getId = (id) => {
    console.log(id)
    onUpdate(id)
  }

  return (
    
      <img 
      onClick={()=>{
        getId(movie.id)
        Clicked()
      }}
      key={movie.id}
      src={IMAGE_BASE_URL+movie.poster_path} className=' w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-[3px] hover:border-gray-400 border-transparent cursor-pointer
       transition-all duration-150 ease-in hover:scale-110 ' />
  )
}

export default MovieCard3
