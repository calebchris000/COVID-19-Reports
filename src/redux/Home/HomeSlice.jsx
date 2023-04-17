import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  state: null,
  details: null,
};

const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    fetchDataRequest: (state) => ({
      ...state,
      state: 'Pending',
    }),
    fetchDataSuccess: (state, { payload }) => ({
      ...state,
      state: 'Success',
      data: payload,
    }),
    fetchDataError: (state, { payload }) => ({
      ...state,
      state: `Error: ${payload}`,
    }),

    setDetails: (state, { payload }) => ({
      ...state,
      details: payload,
    }),
  },
});

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  setDetails,
} = HomeSlice.actions;
export default HomeSlice.reducer;
