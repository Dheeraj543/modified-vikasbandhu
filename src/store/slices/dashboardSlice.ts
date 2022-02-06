import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDashboardData } from "../api";

export const getDashboardData = createAsyncThunk(
  "getDashboardData",
  async () => {
    const res = await fetchDashboardData();
    return res;
  }
);

const initialState = {
  data: {
    liveTransactionValue: [],
    vbUsers: [],
    allTransactions: [],
    sellerProduce: [],
    totalTransactionValue: [],
    matchStatus: [],
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardData.fulfilled, (state, action) => {
      state.data = {
        liveTransactionValue: action.payload["livetransactionoverview"],
        vbUsers: action.payload["vbusers"],
        allTransactions: action.payload["AllTransactions"],
        sellerProduce: action.payload["sellerproduce"],
        totalTransactionValue: action.payload["totaltransactionvalue"],
        matchStatus: action.payload["matchstatus"],
      };
    });
  },
});

export default dashboardSlice.reducer;

// Need to be removed later
const dummyDashboardData: any = {
  livetransactionoverview: [
    { legend: "Trade Pending", value: 200 },
    { legend: "Trade Confirmed", value: 200 },
    { legend: "Seller Booked", value: 200 },
    { legend: "Transportation to be Assigned", value: 200 },
    { legend: "Transportation Assigned", value: 200 },
    { legend: "Produce to be Picked", value: 200 },
    { legend: "Produce Picked", value: 200 },
    { legend: "Produce in Transit", value: 200 },
    { legend: "Produce Delivered", value: 200 },
  ],
  vbusers: [
    { legend: "Seller Only", value: 200 },
    { legend: "Buyer Only", value: 200 },
    { legend: "Seller+Buyer", value: 200 },
  ],
  AllTransactions: [
    { legend: "On Going", value: 200 },
    { legend: "Pending", value: 200 },
    { legend: "Completed", value: 200 },
  ],
  sellerproduce: [
    { legend: "Yes", value: 200 },
    { legend: "No", value: 200 },
  ],
  totaltransactionvalue: [
    { legend: "Produce Type A", value: 200 },
    { legend: "Produce Type B", value: 200 },
    { legend: "Produce Type C", value: 200 },
    { legend: "Produce Type D", value: 200 },
    { legend: "Other Produces", value: 200 },
  ],
  matchstatus: [
    { legend: "Buyer to confirm", value: 200 },
    { legend: "Seller to confirm", value: 200 },
  ],
};
