import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard2 from './MovieCard2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HorMovieCard2 from './HorMovieCard2';
import Upcoming from './Upcoming';
const screenWidth = window.innerWidth;


function MovieList2({genreId, index_, onUpdate, Clicked}) {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null)

  useEffect(()=>{
    getMovieByGenreId2();
},[])


   const getMovieByGenreId2=() => {
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
        {index_%3==0? <HorMovieCard2 Clicked={Clicked} onUpdate={onUpdate} movie={item} /> : <MovieCard2 Clicked={Clicked} onUpdate={onUpdate} movie={item}  />}
        </>
      ))}
    </div>
  </div>
</>
  )
}

export default MovieList2