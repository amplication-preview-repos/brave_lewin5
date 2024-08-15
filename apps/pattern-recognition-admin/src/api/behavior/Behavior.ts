import { Patient } from "../patient/Patient";

export type Behavior = {
  createdAt: Date;
  description: string | null;
  id: string;
  occurredAt: Date | null;
  patient?: Patient | null;
  updatedAt: Date;
};
