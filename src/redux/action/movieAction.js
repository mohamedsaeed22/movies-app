import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/moviesType";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getAllMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5ba9a7fbb4e25fcdc41cf7b9825fcb19&query=${word}&language=en-US`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPages = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5ba9a7fbb4e25fcdc41cf7b9825fcb19&&language=ar&page=${page}`
      );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
