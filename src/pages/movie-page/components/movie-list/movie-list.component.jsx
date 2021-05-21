import React from 'react';
import './movie-list.styles.css'
import Movie from '../movie/movie.component.jsx'

export const MovieList = (props) => (
    <div className ='movie-list'>
        {props.movies.map((movie) => (
            <Movie key={movie.url[movie.url.length-2]} movie = {movie} movies= {props.movies}/>
          ))}
    </div>
)