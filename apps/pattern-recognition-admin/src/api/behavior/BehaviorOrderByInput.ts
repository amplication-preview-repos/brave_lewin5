import { SortOrder } from "../../util/SortOrder";

export type BehaviorOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  occurredAt?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
