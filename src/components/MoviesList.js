import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginations from "./Paginations";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../redux/action/movieAction";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  
  const dataMovies = useSelector((state) => state.movies);
  
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center">لا يوجد افلام</h2>
      )}
      {movies.length >= 1 ? <Paginations /> : null}
    </Row>
  );
};

export default MoviesList;
