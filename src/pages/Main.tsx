import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api";
import { IResponseCharacters } from "../types";
import { Card } from '../components/home';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Loading } from "../components/common";

const Main = () => {
  const { isLoading, data } = useQuery<IResponseCharacters[]>(
    ["allCharacters"],
    fetchCharacters
  );
  return (
    <Container>
      {isLoading ? (
        <Loading />
      ): (
        <>
          <Title>Disney Characters</Title>
          <GridContainer>
            {data?.map((character) => (
              <Link key={character.id} to={`/characters/${character.id}`}>
                <Card name={character.name} imageUrl={character.imageUrl} />
              </Link>
            ))}
          </GridContainer>
      </>
      )}
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1155px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 925px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 479px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  padding: 30px 0;
`;

export default Main;
