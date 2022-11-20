import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: Math.floor(Math.random() * 1000),
  item: 'todo',
  date: '22-11-2022',
  status: 'Ongoing',
}];

const addTodoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

  },

});

export const { addTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
