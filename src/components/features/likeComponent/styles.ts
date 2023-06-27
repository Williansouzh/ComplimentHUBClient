import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.3em;
  .likedIcons {
    display: flex;
    justify-content: space-around;
  }
  .likeContainer span {
    margin-right: 1em;
  }
  .likeContainer {
    display: flex;
    padding: 0.3em;
    align-items: center;
    justify-content: center;
  }
  .liked {
    color: red;
  }
  .likeIcon {
    font-size: 2em;
    cursor: pointer;
  }
  .likeIcon:hover {
    transition-duration: 0.5s;
    transform: scale(1.3);
    color: blue;
  }
`;
