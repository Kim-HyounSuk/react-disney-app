import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Button onClick={() => navigate(-1)}>
                <svg width={25} height={25} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </Button>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 5px;
    &:hover {
        color: ${props => props.theme.bgColor};
        background-color: ${props => props.theme.textColor};
    }
`;

export default Header;