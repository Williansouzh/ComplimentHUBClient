import React from "react";
import * as C from "./styles";
import { complimentType } from "../../../types/complimentType";

interface ComplimentProps {
  compliment: complimentType;
}

export const Compliment: React.FC<ComplimentProps> = ({ compliment }) => {
  return (
    <C.Container>
      <div className="usersInformations">
        <C.User>
          <div className="userProfilePhoto"></div>
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
          <div className="userProfilePhoto"></div>
        </C.User>
      </div>
      <div className="complimentText">{compliment.compliment}</div>
    </C.Container>
  );
};
