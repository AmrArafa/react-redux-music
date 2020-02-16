import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenreCard from './genre_card';
import { genres as genresMockData } from '../mock_data/genres.json';
import styled from 'styled-components';

const GenresTitle = styled.h1`
  text-align: center;
`;

const GenreCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const GenreList = () => {
  const [genreList, setGenreList] = useState([]);

  // useEffect(() => {
  //   axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
  //     .then(response => {
  //       setGenreList(response.data.data);
  //     });
  // }, []);

  return (
    <>
      <GenresTitle>Music Genres</GenresTitle>
      <GenreCardsWrapper>
        {genresMockData.map((genre, index) =>
          <GenreCard genreImg={genre.picture_medium} genreName={genre.name} key={index} />
        )}
      </GenreCardsWrapper>
    </>
  );
}

export default GenreList;