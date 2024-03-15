import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCryptos } from "../../services/apiCrypto";

export const fetchCoins = createAsyncThunk(
  "coins/fetchCoins",
  async function () {
    const data = await getCryptos();
    const coins = data.data.coins;
    return { coins };
  }
);

const initialState = {
  status: "idle",
  error: false,
  errorMessage: "",
  coins: [],
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducer: {
    addCoin: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.coins = action.payload;
        state.status = "idle";
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "error";
        state.error = "There was an error getting the coins!";
      });
  },
});

export const { addCoin } = coinSlice.actions;
export default coinSlice.reducer;
