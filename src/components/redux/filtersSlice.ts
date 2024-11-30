import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  status: string;
}

const filtersInitialState: FiltersState = {
  status: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state: FiltersState, action: PayloadAction<string>) {
      state.status = action.payload;
      console.log(
        "setStatusFilter: state.status",
        state.status,
        "action.payload",
        action.payload,
      );
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
