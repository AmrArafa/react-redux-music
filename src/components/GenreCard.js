import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Spin, Pagination } from "antd";
import styled from "styled-components";
import ArtistCard from "./ArtistCard";
import "antd/dist/antd.css";
import { getArtists } from "../redux/actions";

const StyledGenreCard = styled.div`
  margin: 10px;
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
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

const PaginationWrapper = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const GenreCard = ({
  genreImg,
  genreName,
  genreId,
  history,
  getArtists,
  artists,
  total,
  isPending
}) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    if (!modalVisibility) {
      history.push("/");
    }
  }, [history, modalVisibility]);

  const handleClick = () => {
    setModalVisibility(true);
    history.push(`/genre/${genreId}/artists`);
    getArtists(genreId, { index: 1 });
  };

  const handleOnCancel = () => {
    setModalVisibility(false);
    history.push("/");
  };

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
        <Spin spinning={isPending}>
          {artists && (
            <>
              {artists.map((artist, index) => (
                <ArtistCard
                  artistName={artist.name}
                  artistImg={artist.picture_small}
                  key={index}
                />
              ))}
              <PaginationWrapper>
                <Pagination
                  onChange={(index) => getArtists(genreId, { index })}
                  total={total}
                />
              </PaginationWrapper>
            </>
          )}
        </Spin>
      </Modal>
    </>
  );
};

function mapStateToProps({ artistsReducer: { artists, total, isPending } }) {
  return { artists, total, isPending };
}

const mapDispatchToProps = { getArtists };

export default connect(mapStateToProps, mapDispatchToProps)(GenreCard);
