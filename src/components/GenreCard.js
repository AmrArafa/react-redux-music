import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import axios from 'axios';
import ArtistCard from './ArtistCard';

const StyledGenreCard = styled.div`
  margin: 10px;
  position: relative;
  cursor: pointer;
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
  const { genreImg, genreName, genreId, history } = props;
  const [modalVisibility, setModalVisibility] = useState(false);
  const [artistsList, setArtistsList] = useState([]);

  useEffect(() => {
    if (!modalVisibility) {
      history.push('/');
    }
  }, [history, modalVisibility]);

  const handleClick = () => {
    setModalVisibility(true);
    history.push(`/genre/${genreId}/artists`);
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${genreId}/artists`)
      .then(response => {
        setArtistsList(response.data.data);
      });
  }

  const handleOnCancel = () => {
    setModalVisibility(false);
    history.push('/');
  }

  return (
    <>
      <StyledGenreCard onClick={handleClick}>
        <img src={genreImg} alt={genreName} />
        <h2>{genreName}</h2>
      </StyledGenreCard>
      <Modal
        title={`${genreName} Artists`}
        visible={modalVisibility}
        footer={null}
        onCancel={handleOnCancel}
      >
        {artistsList.map((artist, index) =>
          <ArtistCard
            artistName={artist.name}
            artistImg={artist.picture_small}
            key={index}
          />
        )}
      </Modal>
    </>
  );
}

export default GenreCard;
