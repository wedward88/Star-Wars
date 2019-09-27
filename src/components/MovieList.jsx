import React from 'react';
import MovieListItem from './MovieListItem';

export default (props) => {
    const { movies, currChar, movieItemShow } = props;

    const movieList = movies.map(movie => {
        return <MovieListItem key={ movie.title } movie={ movie } show={ movieItemShow } />
    });

    
    return (
        <div className="movie-section">
            <h1>{ currChar ? `${currChar} appeared in the following films:` : " " }</h1> 
            <ul className="movie-list">
                {movieList}
            </ul>
        </div>
        
    );
}