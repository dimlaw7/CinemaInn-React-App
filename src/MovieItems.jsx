import React from "react";

const MovieItems = ({ movie })=> {
    return (
        <>
            <div className="movie" style={{backgroundImage: `url(${movie.Poster})`}}>
                <span className="tag">Priority</span>
                <span className="rating">7.6</span>
                <div className="movie-details">
                    <span className="type">{movie.Type}</span>
                    <span className="title">{movie.Title}</span>
                </div>
            </div>
        </>
    )
}

export default MovieItems