import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100vw;
  height: 100vh;
  position: absolute;

  .content {
    width: 50%;
    height: 20%;
    background-color: #3f3f3f;
    padding: 2em;
    border-radius: 15px;
  }
`;
