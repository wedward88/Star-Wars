import React from 'react';
import { Transition } from 'react-transition-group';

export default (props) => {

    const { movie, show } = props;
    const date = new Date(`${movie.release_date} 00:00`);
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${weekDays[date.getDay() - 1]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    const moviePosters = [
        "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY999_CR0,0,659,999_AL_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR71,0,630,1200_AL_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR70,0,630,1200_AL_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR72,0,630,1200_AL_.jpg",
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UY1200_CR91,0,630,1200_AL_.jpg"
    ];
    
    return (
        <Transition timeout={4000} in={ !show } exit={ true } appear>
            {(status) => (
                    <li className={`movie-list-item movie-list-item-${status}`} key={movie.title}>
                        <img src={moviePosters[movie.episode_id - 1]} alt="movie-poster"/>
                        <div className="movie-info">
                            <h2>{movie.title}</h2>
                            <h3><strong>Directed by:</strong> {movie.director}</h3>
                            <p>{movie.opening_crawl}</p> 
                            <p><strong>Release Date:</strong> {formattedDate}</p> 
                        </div>
                    </li>
            )}
        </Transition>
    );
}