import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 1em;
  width: 50%;
  max-height: 100vh;
  float: none;
  overflow-y: auto;
  margin: 0 auto;
  &::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
    background-color: transparent; /* Cor de fundo da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Cor da barra de rolagem */
  }
`;
