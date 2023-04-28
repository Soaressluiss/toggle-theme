import styled from "styled-components";

export const MyHeader = styled.header`
    width: 100%;
    height: 50px;
    background-color: #37adc5;
    display: grid;
    place-items: center;
    box-shadow: 0 0 5px 1px #333;
    grid-template-columns: 1fr 1fr;
    h3 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
    }
`;
