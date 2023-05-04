import styled, { keyframes } from "styled-components";

const Pointer = keyframes`
    to { transform: scale(.9) };
`;

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
    &:hover {
        animation: ${Pointer} 0.4s ease forwards;
    }
`;
