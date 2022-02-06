import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMatchesDetails } from "../api";

export const getMatchesDetails = createAsyncThunk("getMatchesDetails", async () => {
  const res = fetchMatchesDetails();
  return res;
});

const initialState = {
  data: []
};

const matchesSlice = createSlice({
  name: "matches",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatchesDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export default matchesSlice.reducer;