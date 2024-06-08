import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Aakash",
  },
  {
    id: "1",
    name: "Aj",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUser = (state) => state.users;
export default usersSlice.reducer;
