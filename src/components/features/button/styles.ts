import styled from "styled-components";
type buttonProps = {
  primary: boolean;
};
export const Button = styled.button<buttonProps>`
  background-color: ${(props) => (props.primary ? "black" : "#D9D9D9")};
  border: none;
  color: white;
  padding: 1em 2em;
  cursor: pointer;
  border-radius: 0.3em;
`;
