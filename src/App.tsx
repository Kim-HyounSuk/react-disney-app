import { Outlet } from "react-router-dom";
import Global from "./styles/Global";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Global />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  padding: 50px 10px;
`;