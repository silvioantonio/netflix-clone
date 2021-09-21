/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './FeaturedMovie.css';

export default ({movie}) => {

    let firstDate = new Date(movie.first_air_date);
    let genres = movie.genres.map((obj) => obj.name).join(', ')
    let description = movie.overview;
    if(description.length > 200){
        description = description.substring(0, 200) + '...';
    }
    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{movie.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{movie.vote_average} ponto{movie.vote_average === 1 ? '' : 's'}</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{movie.number_of_seasons} temporada{movie.number_of_seasons === 1 ? '' : 's'}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${movie.id}`} className="featured--watchbutton">Assistir</a>
                        <a href={`/list/add/${movie.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">Gêneros: <strong>{genres}</strong></div>
                </div>
            </div>
        </section>
    )
}