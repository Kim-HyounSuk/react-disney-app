import styled from "styled-components";

interface IImageBoxProps {
  imageUrl: string;
  sizes: string;
}

const ImageBox = ({imageUrl, sizes}: IImageBoxProps) => {
  return (
    <Container sizes={sizes}>
      <Img src={imageUrl ? imageUrl : ''} />
    </Container>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Container = styled.div<{ sizes: string }>`
  width: ${(props) => props.sizes};
  height: ${(props) => props.sizes};
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ImageBox;
