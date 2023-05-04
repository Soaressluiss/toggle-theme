import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: 1rem 0;
    > p {
        color: ${({ theme }) => theme.color};
        font-weight: bold;
        font-size: 1.2rem;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
    }
`;

export const DevContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.3rem;
    > h5 {
        color: ${({ theme }) => theme.color};
        font-weight: bold;
        font-size: 1.1rem;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
    }
    > ul {
        display: flex;
        gap: 1rem;
        > li {
            font-size: 1.5rem;
        }
    }
`;
export const SpanInfo = styled.span`
    color: ${({ theme }) => theme.colorSpan};
    font-style: italic;
`;
