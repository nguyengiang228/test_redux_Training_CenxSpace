import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { BreedState } from "../interface/breed";

export const dashboardPersistConfig: PersistConfig<BreedState> = {
  key: "breeds",
  storage,
};
