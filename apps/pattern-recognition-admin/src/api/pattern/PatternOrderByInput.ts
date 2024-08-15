import { SortOrder } from "../../util/SortOrder";

export type PatternOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
