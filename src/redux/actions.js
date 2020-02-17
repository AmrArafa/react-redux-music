import axios from "axios";

export const getGenres = (pagination = {}) => ({
  type: "GET_GENRES",
  payload: axios
    .get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(response => response.data.data),
  meta: {
    ...pagination
  }
});

export const getArtists = (genreId, pagination = {}) => ({
  type: "GET_ARTISTS",
  payload: axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${genreId}/artists`
    )
    .then(response => response.data.data),
  meta: {
    ...pagination
  }
});
