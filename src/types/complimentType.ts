export type complimentType = {
  id?: number;
  sender: string;
  receiver: string;
  compliment: string;
  date?: number | string;
  department: string;
  likes?: number;
  deslikes?: number;
};
