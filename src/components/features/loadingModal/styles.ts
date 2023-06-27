import styled, { keyframes } from "styled-components";

// Define a animação usando a função keyframes
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.3); /* red with opacity */
  .content {
    width: 8em;
    height: 8em;
    border-radius: 50%;
    border: 6px solid black;
    border-top-color: transparent;
    border-bottom-color: transparent;

    animation: ${spinAnimation} 2s linear infinite; // Aplica a animação ao elemento
  }
`;
