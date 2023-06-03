import React, { useEffect, useState } from "react";
import { api } from "../../../api";
import { complimentType } from "../../../types/complimentType";
import { Compliment } from "../compliment";
import * as C from "./styles";

export const FeedContainer = () => {
  const [compliments, setCompliments] = useState<complimentType[]>([]);

  useEffect(() => {
    const fetchCompliments = async () => {
      try {
        const response = await api.listCompliments();
        const list = [];
        for (let i in response) {
          list.push(response[i]);
        }
        setCompliments(list.reverse());
      } catch (error) {
        console.error("Error fetching compliments:", error);
      }
    };
    console.log("compliments: ", compliments.length);
    fetchCompliments();
  }, []);

  return (
    <C.Container>
      {compliments.map((compliment) => (
        <Compliment key={compliment.id} compliment={compliment} />
      ))}
    </C.Container>
  );
};
