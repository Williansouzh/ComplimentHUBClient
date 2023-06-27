import React, { useEffect, useState } from "react";
import { api } from "../../../api";
import { complimentType } from "../../../types/complimentType";
import { Compliment } from "../compliment";
import * as C from "./styles";
import { CreateCompliment } from "../createCompliment";

export const FeedContainer = () => {
  const [compliments, setCompliments] = useState<complimentType[]>([]);
  const fetchCompliments = async () => {
    console.log("upodate the screem");
    try {
      const response = await api.listCompliments();
      const list = [];
      for (let i in response) {
        list.push(response[i]);
      }
      setCompliments(list.reverse());
      console.log("complimets: ", compliments);
    } catch (error) {
      console.error("Error fetching compliments:", error);
    }
  };
  useEffect(() => {
    fetchCompliments();
  }, []);

  return (
    <C.Container>
      <CreateCompliment compliment={fetchCompliments} />
      {compliments.map((compliment) => (
        <Compliment key={compliment.id} compliment={compliment} />
      ))}
    </C.Container>
  );
};
