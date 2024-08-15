import { Patient } from "../patient/Patient";

export type Pattern = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  patient?: Patient | null;
  updatedAt: Date;
};
