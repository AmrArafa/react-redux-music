import React from 'react';
import styled from 'styled-components';

const StyledArtistCard = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 0 0 10px;
  }

  + div {
    margin-top: 10px;
  }
`;

const ArtistCard = props => {
  const { artistName, artistImg } = props;

  return (
    <StyledArtistCard>
      <img src={artistImg} alt={artistName} />
      <p>{artistName}</p>
    </StyledArtistCard>
  )
}

export default ArtistCard;
