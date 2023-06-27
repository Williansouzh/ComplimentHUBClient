import { useEffect, useState } from "react";
import { api } from "../../../api";
import * as C from "./styles";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
export const LikePost = ({
  likes,
  deslikes,
  id,
}: {
  likes: number;
  deslikes: number;
  id: number;
}) => {
  const [likesState, setLikesState] = useState({
    likes: Math.abs(likes),
    deslikes: Math.abs(deslikes),
  });

  const likeCompliment: React.MouseEventHandler<SVGElement> = async (e) => {
    const likeIcon = e.currentTarget;
    const id = likeIcon.id;
    let liked = false;
    if (likeIcon.classList.contains("liked")) {
      liked = true;
      likeIcon.classList.remove("liked");
    } else {
      liked = false;
      likeIcon.classList.add("liked");
    }
    await api.addLike(parseInt(id), liked);
    setLikesState({
      ...likesState,
      likes: likesState.likes + (liked ? -1 : 1),
    });
  };
  const DeslikeCompliment: React.MouseEventHandler<SVGElement> = async (e) => {
    const likeIcon = e.currentTarget;
    const id = likeIcon.id;
    let liked = false;
    if (likeIcon.classList.contains("liked")) {
      liked = true;
      likeIcon.classList.remove("liked");
    } else {
      liked = false;
      likeIcon.classList.add("liked");
    }
    await api.addLike(parseInt(id), liked);
    setLikesState({
      ...likesState,
      deslikes: likesState.deslikes + (liked ? -1 : 1),
    });
  };
  return (
    <C.Container>
      <div className="likedIcons">
        <div className="likeContainer">
          <span>{likesState.likes}</span>
          <AiFillLike
            className="likeIcon "
            id={String(id)}
            onClick={likeCompliment}
          />
        </div>
        <div className="likeContainer">
          <span>{likesState.deslikes}</span>
          <AiFillDislike
            className="likeIcon "
            id={String(id)}
            onClick={DeslikeCompliment}
          />
        </div>
      </div>
    </C.Container>
  );
};
