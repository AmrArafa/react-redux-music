import React, { useEffect } from "react";
import { connect } from "react-redux";
import GenreCard from "./GenreCard";
import styled from "styled-components";
import { Spin, Pagination } from "antd";
import { getGenres } from "../redux/actions";

const GenresTitle = styled.h1`
  text-align: center;
`;

const GenreCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  min-height: 700px;
`;

const PaginationWrapper = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const GenreList = ({ getGenres, genres, total, isPending, ...props }) => {
  useEffect(() => {
    getGenres({ index: 1 });
  }, [getGenres]);

  return (
    <>
      <GenresTitle>Music Genres</GenresTitle>
      <Spin spinning={isPending}>
        <GenreCardsWrapper>
          {genres && (
            <>
              {genres.map((genre, index) => (
                <GenreCard
                  genreId={genre.id}
                  genreImg={genre.picture_medium}
                  genreName={genre.name}
                  key={index}
                  {...props}
                />
              ))}
            </>
          )}
        </GenreCardsWrapper>
        <PaginationWrapper>
          <Pagination
            onChange={(index) => getGenres({ index })}
            total={total}
          />
        </PaginationWrapper>
      </Spin>
    </>
  );
};

function mapStateToProps({ genresReducer: { genres, total, isPending } }) {
  return { genres, total, isPending };
}

const mapDispatchToProps = { getGenres };

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
