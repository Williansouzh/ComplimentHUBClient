import { useEffect, useState } from "react";
import { Employer, UserType } from "../../../types/userType";
import * as C from "./styles";
import { useAppSelector } from "../../../redux/hooks/useAppSelectors";
import { api } from "../../../api";
import { Button } from "../button";

export const CreateComplimnet = () => {
  //get employers logged
  const [employers, setEmployers] = useState<Employer[]>([]);

  useEffect(() => {
    async function fetchEmployers() {
      const response = await api.list();
      setEmployers(response);
    }

    fetchEmployers();
  }, []);

  return (
    <C.Container>
      <textarea required cols={20} rows={10} />
      <div className="buttonsContainer">
        <div>
          <legend>Compliment:</legend>
          <select>
            {employers.map((e) => (
              <option key={e.id}>{e.name}</option>
            ))}
          </select>
        </div>

        <Button text="Compliment" primary />
      </div>
    </C.Container>
  );
};
