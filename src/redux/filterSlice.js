const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeValueFilter: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

// console.dir(filterSlice)

export const { changeValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
