import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  updatedAt?: SortOrder;
};
