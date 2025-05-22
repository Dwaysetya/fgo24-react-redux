import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const surveyResult = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addUsers: function (state, action) {
      const id = state.data.length + 1;
      state.data.push({
        id,
        ...action.payload,
      });
    },
    removeData: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addUsers } = surveyResult.actions;
export const { removeData } = surveyResult.actions;
export default surveyResult.reducer;
