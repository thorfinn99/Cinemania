import React from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function Upcoming({movie}) {
    const getUpcomingVideos=()=>{
        GlobalApi.getUpcomingVideos.then(resp=>{
          console.log(resp.data.results)
        })
      }

  return (
   <div>
   .
   </div>
  )
}

export default Upcoming
