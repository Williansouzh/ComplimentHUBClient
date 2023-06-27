import React, { useEffect, useState } from "react";
import { Employer, UserType } from "../../../types/userType";
import * as C from "./styles";
import { useAppSelector } from "../../../redux/hooks/useAppSelectors";
import { api } from "../../../api";
import { Button } from "../button";
import { complimentType } from "../../../types/complimentType";
import { LoadingModal } from "../loadingModal";

interface CreateComplimentProps {
  compliment: () => void;
}

export const CreateCompliment: React.FC<CreateComplimentProps> = ({
  compliment,
}) => {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [complimentState, setComplimentState] = useState<complimentType>({
    compliment: "",
    department: "",
    receiver: "",
    sender: "",
  });

  useEffect(() => {
    fetchEmployers();
  }, []);

  const fetchEmployers = async () => {
    try {
      const response = await api.list();
      setEmployers(response);
    } catch (error) {
      console.log("Error fetching employers:", error);
    }
  };

  const handleChangeCompliment = (value: string, key: string): void => {
    setComplimentState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const selectedEmployer = employers.find(
        (obj) => obj.name === complimentState.receiver
      );
      console.log(selectedEmployer);
      const department = selectedEmployer?.post || "employer";
      const currentDate = new Date().toISOString();

      const updatedComplimentState = {
        ...complimentState,
        sender: user.name,
        department,
        date: currentDate,
      };

      console.log("Data sent:", updatedComplimentState);

      await api.createNewCompliment(updatedComplimentState);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    compliment();
    setComplimentState({
      compliment: "",
      department: "",
      receiver: "",
      sender: "",
    });
  };

  return (
    <C.Container>
      {loading && <LoadingModal />}
      <form onSubmit={onSubmitHandler}>
        <textarea
          required
          cols={20}
          rows={5}
          value={complimentState.compliment}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleChangeCompliment(event.target.value, "compliment");
          }}
        />
        <div className="buttonsContainer">
          <div>
            <legend>Compliment:</legend>
            <select
              defaultValue="DEFAULT"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChangeCompliment(event.target.value, "receiver");
              }}
            >
              <option value="DEFAULT" disabled>
                Choose someone ...
              </option>
              {employers.map((e) => (
                <option key={e.id}>{e.name}</option>
              ))}
            </select>
          </div>

          <Button text="Compliment" primary />
        </div>
      </form>
    </C.Container>
  );
};
