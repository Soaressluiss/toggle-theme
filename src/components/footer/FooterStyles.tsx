import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: 2rem 0;
    text-align: center;
    @media screen and (max-width: 430px) {
        padding: 2rem;
    }
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
    @media screen and (max-width: 430px) {
        flex-direction: column;
        align-items: center;
    }
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
        @media screen and (max-width: 430px) {
            flex-direction: row;
        }
        > li {
            font-size: 1.5rem;
            @media screen and (max-width: 430px) {
                font-size: 2rem;
            }
        }
    }
`;
export const SpanInfo = styled.span`
    color: ${({ theme }) => theme.colorSpan};
    font-style: italic;
`;
