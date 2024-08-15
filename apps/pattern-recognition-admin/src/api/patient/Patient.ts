import { Behavior } from "../behavior/Behavior";
import { Pattern } from "../pattern/Pattern";

export type Patient = {
  age: number | null;
  behaviors?: Array<Behavior>;
  createdAt: Date;
  id: string;
  name: string | null;
  patterns?: Array<Pattern>;
  sex: string | null;
  updatedAt: Date;
};
