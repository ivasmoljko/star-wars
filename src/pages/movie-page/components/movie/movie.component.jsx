import React from 'react'
import './movie.styles.css'
import {AnimateSharedLayout, motion} from 'framer-motion'
import { useState } from 'react'

function Movie({movie, movies}) {
    const [open,setOpen] = useState(false);

    
    return <AnimateSharedLayout>
    {
    open?
        <motion.div className='movie-container-expanded' onClick = {()=>setOpen(false)} layoutId= "expandable-card">
            <img alt="movie" src= {`https://robohash.org/${movie.url[movie.url.length - 2]}?set=set1&size=180x180`} />
            <h2 >{movie.title}</h2>
            <p>Release date: {movie.release_date}</p>
            <p>Opening crawl: {movie.opening_crawl} </p>
        </motion.div>
    :

        <motion.div className='movie-container' onClick = {()=>setOpen(true)} layoutId= "expandable-card">
            <img alt="movie" src= {`https://robohash.org/${movie.url[movie.url.length - 2]}?set=set1&size=180x180`} />
            <h2 >{movie.title}</h2>
            <p>{movie.release_date}</p>
        </motion.div>
    }
    </AnimateSharedLayout> 

}
export default Movie;
