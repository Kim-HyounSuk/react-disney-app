import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import { IResponseDetail } from '../types';
import { fetchDetail } from '../api';
import styled from 'styled-components';
import { Header, ImageBox, Loading } from '../components/common';

const Detail = () => {
    const { id } = useParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // 윈도우 너비 상태

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const { isLoading, data } = useQuery<IResponseDetail>(
        [id],
        () => fetchDetail(id)
      );
    return (
      <Container>
        {
          isLoading ? (
            <Loading />
          ) : (
            <>
              <Header />
              <ImageBox imageUrl={data?.imageUrl ? data.imageUrl : ''} sizes='300px' />
              <Title>{data?.name}</Title>
              <Films sizes={`${windowWidth * 0.5}px`}>
                {
                  data?.films.map(film => <Film>{film}</Film>)
                }
              </Films>
            </>
          )
        }
      </Container>
    );
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    padding: 30px 0;
  `;

  const Films = styled.div<{sizes: string}>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 15px 0;
    width: ${props => props.sizes};
  `;

  const Film = styled.span`
    padding: 15px 5px;
    color: ${props => props.theme.bgColor};
    font-size: 14px;
    font-weight: 600;
    background-color: ${props => props.theme.textColor};
    border-radius: 5px;
  `;
  
  export default Detail;
  