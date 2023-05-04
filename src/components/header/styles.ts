import styled from "styled-components";

export const Header = styled.header`
  display: flex;
`;

export const Nav = styled.nav`
  width: 100vw;
  padding: 0.5em 1em;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
  }
  p {
    font-size: 0.8em;
  }
  .profileName {
    font-size: 2em;
  }
`;

export const ProfileImg = styled.div`
  display: flex;
  align-items: center;

  .profileImg .img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    background-color: blue;
  }
`;
