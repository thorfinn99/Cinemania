import React from 'react'
import GlobalApi from '../Services/GlobalApi'
import Detail from './Detail'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function HorMovieCard({movie, onUpdate, Clicked}) {
  const getId = (id) => {
   // console.log(id)
      onUpdate(id)
  }

  // const [showDetail, setShowDetail] = useState(false)
  // const Clicked = () => {
  //   setShowDetail(true)
  // }
  // const close = () => {
  //   setShowDetail(false)
  // }

  return (
<>

    <div className='flex flex-col items-center font-bold ' >
      <img
      onClick={()=>{
        getId(movie.id)
        Clicked()
      }}
      src={IMAGE_BASE_URL+movie.backdrop_path} className=' w-[220px] md:ml-2 md:w-[350px] rounded-lg hover:border-[3px] border-[3px] hover:border-gray-400 border-transparent cursor-pointer
       transition-all duration-150 ease-in hover:scale-110 ' />
       <h2 className='w-[220px] pt-3 pl-3 md:w-[350px] ' >{movie.title}</h2>
    </div>
</>
  )
}

export default HorMovieCard
