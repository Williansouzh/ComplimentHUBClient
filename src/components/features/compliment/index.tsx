import React, { useState } from "react";
import * as C from "./styles";
import { complimentType } from "../../../types/complimentType";

import { FaUserCircle, FaUserAstronaut } from "react-icons/fa";
import { LikePost } from "../likeComponent";

interface ComplimentProps {
  compliment: complimentType;
}

export const Compliment: React.FC<ComplimentProps> = ({ compliment }) => {
  return (
    <C.Container>
      <div className="usersInformations">
        <C.User>
          <FaUserCircle className="userProfilePhoto" />
          <div className="userInformations">
            <p>{compliment.sender}</p>
            <p>{compliment.department}</p>
          </div>
        </C.User>
        <h3>For</h3>
        <C.User>
          <div className="userInformations">
            <p>{compliment.receiver}</p>
            <p>{compliment.department}</p>
          </div>
          <FaUserAstronaut className="userProfilePhoto--receiver" />
        </C.User>
      </div>
      <div className="complimentText">{compliment.compliment}</div>
      <LikePost
        deslikes={compliment.likes ?? 0}
        likes={compliment.likes ?? 0}
        id={compliment.id ?? 0}
      />
    </C.Container>
  );
};
