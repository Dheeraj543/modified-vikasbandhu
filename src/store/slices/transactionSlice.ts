import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTransactionsDetails } from "../api";

export const getTransactionsDetails = createAsyncThunk("getTransactionsDetails", async () => {
  const res = fetchTransactionsDetails();
  return res;
});

const initialState = {
  data: []
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactionsDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export default transactionsSlice.reducer;