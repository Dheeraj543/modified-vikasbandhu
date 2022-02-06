import { configureStore } from "@reduxjs/toolkit";
import TransactionsReducer from "./slices/transactionSlice";
import MatchesReducer from "./slices/matchesSlice";
import DashboardReducer from "./slices/dashboardSlice";
import UsersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    transactions: TransactionsReducer,
    matches: MatchesReducer,
    users: UsersReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
