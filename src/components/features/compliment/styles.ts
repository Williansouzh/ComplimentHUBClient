import styled from "styled-components";

export const Container = styled.div`
  background-color: #c0c0c0;
  margin-bottom: 1em;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .usersInformations {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .complimentText {
    background-color: #d9d9d9;
    width: 100%;
    word-wrap: break-word;
    padding: 1em;
  }
`;

export const User = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  max-width: 45%;
  padding: 0.5em;
  p {
    font-size: 0.9em;
  }
  .userProfilePhoto {
    width: 2.4em;
    height: 2.4em;
    border-radius: 50%;
  }
  .userInformations {
    margin: 0em 1em;
  }
  .userProfilePhoto--receiver {
    width: 2.4em;
    height: 2.4em;
    border-radius: 50%;
    color: crimson;
  }
`;
