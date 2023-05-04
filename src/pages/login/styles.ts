import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;
export const LeftSide = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: 100vh;
  .text-primary {
    font-size: 3em;
  }
`;
export const RightSide = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 70%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .link {
    text-align: center;
  }
  p {
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-weight: bold;
    text-align: center;
    margin: 1em 0em;
    text-align: left;
  }
`;
