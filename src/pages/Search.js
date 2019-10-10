import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

import './Search.css';

export default function Search(){
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        
        const response = await api.get(`search/movie?api_key=8812f46d36cdbfdb2b0367796e98c9cb&language=pt-BR&query=${search}&page=1`);
        const genres = await api.get('genre/movie/list?api_key=8812f46d36cdbfdb2b0367796e98c9cb&language=pt-BR');

        setMovies(response.data.results);
        setGenres(genres.data.genres);
    }

    function formatDate(date) {
        if (date) {
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`
        }
    }

    function formatGenre(id) {
        const result = genres.find(genre => genre.id === id);
        if (result) return result.name
    }
console.log(movies)
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    placeholder="Busque um filme por nome ou gênero..."
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                />
            </form>
            {movies.map(movie => (
                <Link to={`/info/${movie.id}`} key={movie.id}>
                    <section>
                        {!movie.poster_path ? <img
                            src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'}
                            alt="poster"
                            /> : <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />}
                        <article>
                            <header>
                                <h1>
                                    {movie.title}
                                    <div className="popularity">
                                        <span>{Math.floor(movie.popularity)}%</span>
                                    </div>
                                </h1>
                            </header>
                            <div className="release-date">{formatDate(movie.release_date)}</div>
                            <div className="content">
                                {movie.overview}
                            </div>
                            <footer>
                                <div className="genres">
                                    {(typeof(movie.genre_ids) == 'object') ?
                                        movie.genre_ids.map(genre_id => (
                                            <span key={genre_id}>{formatGenre(genre_id)}</span>
                                        )) : <span>Sem gênero</span>}
                                </div>
                            </footer>
                        </article>
                    </section>
                </Link>
            ))}
        </div>
    );
}