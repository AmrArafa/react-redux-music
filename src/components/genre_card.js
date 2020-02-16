import React from 'react';
import styled from 'styled-components';

const StyledGenreCard = styled.div`
  margin: 10px;
  position: relative;
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.4;
  }
  h2 {
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
  }
  img {
    width: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`;

const GenreCard = props => {
  const { genreImg, genreName } = props;

  return (
    <StyledGenreCard>
      <img src={genreImg} alt={genreName} />
      <h2>{genreName}</h2>
    </StyledGenreCard>
  )
}

export default GenreCard;
