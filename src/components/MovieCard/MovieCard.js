import React from 'react';
import "./MovieCard.scss";
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {data} = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data.id}`}>
      <div className="card-inner">
        <div className="card-top">
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}  alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>{data.vote_average}/10 <i className='fa fa-thumbs-up'></i></p>
            <p className='average-class'>{new Date(data.release_date).getFullYear()}</p>
          </div>
        </div>
      </div>
      <div className='movie-over'><h2>overview</h2> <p>{data.overview}</p></div>
      </Link>
    </div>
  );
};

export default MovieCard;