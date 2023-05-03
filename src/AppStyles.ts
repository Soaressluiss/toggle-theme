import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colorSecondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h4 {
        color: ${({ theme }) => theme.color};
        font-size: 2rem;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
        font-weight: bold;
    }
`;
