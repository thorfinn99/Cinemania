import React, { useState } from 'react'
import GenreList from '../Constant/GenreList'
import MovieList from './MovieList'
import Upcoming from './Upcoming'
import Detail from './Detail'

function GenreMovieList() {
  const [currentId, setCurrentId] = useState('508883')
  const updateValue = (newId) => {
    setCurrentId(newId)
  }

  const [showDetail, setShowDetail] = useState(false)
  const Clicked = () => {
    setShowDetail(true)
  }
  const close = () => {
    setShowDetail(false)
  }

  return (
    <div className='relative' >
      <div className='absolute z-50 top-[0px] ' >
   { showDetail && <Detail Clicked={Clicked} close={close} currentId={currentId}  /> }
  </div>
    <div>
      {GenreList.genere.map((item, index)=> index<=5&& (
        <div className='md:p2  px-8 md:px-16 ' >
            <h2 className=' text-[20px] text-white font-bold ' > {item.name} </h2>
            <MovieList Clicked={Clicked}  onUpdate={updateValue} genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default GenreMovieList
