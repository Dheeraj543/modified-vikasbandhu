import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersDetails } from "../api";

export const getUsersDetails = createAsyncThunk("getUsersDetails", async () => {
  const res = fetchUsersDetails();
  console.log(res);
  return res;
});

const initialState = {
  data: []
};

const transactionsSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export default transactionsSlice.reducer;