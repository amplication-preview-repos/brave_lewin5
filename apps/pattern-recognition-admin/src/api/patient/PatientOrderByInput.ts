import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  sex?: SortOrder;
  updatedAt?: SortOrder;
};
