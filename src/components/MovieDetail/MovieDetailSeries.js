import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedMovies,
  fetchAsyncDetailSeries,
  getSelectedDetailSeries,
} from "../../features/movies/movieSlice";

const MovieDetailSeries = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedDetailSeries);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncDetailSeries(id));
    return () => {
      dispatch(removeSelectedMovies());
    };
  }, [dispatch, id]);

  const genres_const = data?.genres?.map((el) => el.name);
  const genres_string = genres_const?.toString();

  const company_const = data?.production_companies?.map((el) => el.name);
  const company_string = company_const?.toString();

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.name}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.vote_average}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.vote_count}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.runtime} min
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> :{" "}
                {new Date(data.release_date).getFullYear()}
              </span>
            </div>
            <div className="movie-plot">{data.overview}</div>
            <div className="movie-info">
              <div>
                <span>Homepage :</span>
                <span>
                  <a href={data.homepage} style={{ color: "#79b8f3" }}>
                    {data.homepage}
                  </a>
                </span>
              </div>
              <div>
                <span>Production companies :</span>
                <span>{company_string}</span>
              </div>
              <div>
                <span>Original title :</span>
                <span>{data.original_name}</span>
              </div>
              <div>
                <span>Tagline :</span>
                <span>{data.tagline}</span>
              </div>
              <div>
                <span>Language :</span>
                <span>{data.original_language}</span>
              </div>

              <div>
                <span>Genres :</span>
                <span> {genres_string}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={data.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailSeries;
