import styled, { keyframes } from "styled-components";

const Loading = () => {
    return (
      <Container>
        <Text>Loading</Text>
        <Dot delay='0s' />
        <Dot delay='0.1s' />
        <Dot delay='0.2s' />
      </Container>
    )
}

const Animation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Text = styled.h3`
    font-size: 24px;
    font-weight: 900;
`;

const Dot = styled.div<{delay: string}>`
  background-color: ${props => props.theme.textColor};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${Animation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`

export default Loading;