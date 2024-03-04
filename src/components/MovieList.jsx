import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HorMovieCard from './HorMovieCard';
import Upcoming from './Upcoming';
const screenWidth = window.innerWidth;


function MovieList({genreId, index_, onUpdate, Clicked}) {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null)

  useEffect(()=>{
    getMovieByGenreId();
},[])


   const getMovieByGenreId=() => {
     GlobalApi.getMovieByGenreId(genreId).then(resp=> {
      //  console.log(resp.data.results)
        setMovieList(resp.data.results)
     })
   }

   const getId = (id) => {
    console.log(id)
  }

  return (
<>
   <div className='relative' >
    <div className='flex overflow-x-auto scrollbar-hide gap-8 pt-5 px-3 pb-10 ' >
      {movieList.map((item, index)=> (
        <>
        {index_%3==0? <HorMovieCard Clicked={Clicked} onUpdate={onUpdate} movie={item} /> : <MovieCard Clicked={Clicked} onUpdate={onUpdate} movie={item}  />}
        </>
      ))}
    </div>
  </div>
</>
  )
}

export default MovieList