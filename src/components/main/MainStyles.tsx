import styled from "styled-components";

export const ContainerMain = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colorSecondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const WrapperImg = styled.div`
    width: 45%;
    height: 70%;
    background-color: ${({ theme }) => theme.colorPrimary};
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    gap: 3rem;
    border-radius: 20px;
    h4 {
        color: ${({ theme }) => theme.color};
        font-size: 1.7rem;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
        font-weight: bold;
    }
    img {
        width: 25%;
    }
`;
