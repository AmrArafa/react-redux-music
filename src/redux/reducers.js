import { paginate } from "../utils/paginate";

const defaultGenresState = {
  isPending: true,
  genres: []
};

const defaultArtistsState = {
  isPending: true,
  artists: []
};

export const genresReducer = (state = defaultGenresState, action) => {
  const { limit, index } = action.meta || {};

  switch (action.type) {
    case "GET_GENRES_PENDING":
      return defaultGenresState;

    case "GET_GENRES_FULFILLED":
      return {
        isPending: false,
        genres: paginate(action.payload, limit, index),
        total: action.payload.length
      };

    default:
      return state;
  }
};

export const artistsReducer = (state = defaultArtistsState, action) => {
  const { limit, index } = action.meta || {};

  switch (action.type) {
    case "GET_ARTISTS_PENDING":
      return defaultArtistsState;

    case "GET_ARTISTS_FULFILLED":
      return {
        isPending: false,
        artists: paginate(action.payload, limit, index),
        total: action.payload.length
      };

    default:
      return state;
  }
};
