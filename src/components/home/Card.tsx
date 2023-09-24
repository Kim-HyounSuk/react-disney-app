import styled from "styled-components";
import { ImageBox } from '../common';
import { IResponseCharacters } from '../../types';

interface ICardProps {
    name: IResponseCharacters['name'];
    imageUrl?: IResponseCharacters['imageUrl'];
}

const Card = ({name, imageUrl}: ICardProps) => {
    return(
        <Container>
            <ImageBox imageUrl={imageUrl ? imageUrl : ''} sizes="150px" />
            <Title>{name}</Title>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;
    &:hover {
        color: ${props => props.theme.bgColor};
        background-color: ${props => props.theme.textColor};
    }
`;

const Title = styled.h2`
    font-size: 18px;
    font-weight: 900;
    padding: 5px 0;
    text-align: center;
`;

export default Card;