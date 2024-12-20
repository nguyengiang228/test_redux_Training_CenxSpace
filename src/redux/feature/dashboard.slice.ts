import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IBreed } from "../../interface/breed";

interface BreedState {
  breeds: IBreed[];
}
const initialState: BreedState = {
  breeds: [],
};
export const dashboardSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    // logic here
  },
});

export const {} = dashboardSlice.actions;
export const selectCount = (state: RootState) => state.reducer.breeds;
export default dashboardSlice.reducer;
