import styled from "styled-components";

export const ContainerToggle = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    background-color: ${({ theme }) => theme.containerIcon};
    border-radius: 20px;
    cursor: pointer;
`;
