import React from "react";

function MovieRanks(props) {
    return (
      <li>
        <a href={`https://www.themoviedb.org/movie/${props.movieRank.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${props.movieRank.poster_path}`} alt={props.movieRank.title} />
          <em>
            <span className="title">{props.movieRank.title}</span>
            {/* <span className="star">{props.movieRank.vote_average}</span> */}
          </em>
        </a>
      </li>
    );
  }

const MovieRangKing = ( props ) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__rangk">
        <ul>
            {props.movieRank.map((movieRank, index) => (
              <MovieRanks key={index} movieRank={movieRank} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MovieRangKing