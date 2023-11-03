import React from 'react'
import MediaCard from './Movie_card'

function Movie_list({movies}) {
  return (
    <div style={{display:'flex' , gap:"70px" , margin:'50px'}}>

{
    movies.map(e=>
        <MediaCard movie={e}/>
            )
}


    </div>
  )
}

export default Movie_list