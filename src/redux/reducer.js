import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Math.floor(Math.random() * 1000),
    item: 'todo',
    date: '2022-11-23',
    time: '12:43',
    details: 'this is default task',
    status: 'Ongoing',
  },
  {
    id: Math.floor(Math.random() * 1000),
    item: 'todo2',
    date: '2022-11-22',
    time: '12:43',
    details: 'this is default task 2',
    status: 'Done',
  },
  {
    id: Math.floor(Math.random() * 1000),
    item: 'todo2',
    date: '2022-11-22',
    time: '12:43',
    details: 'this is default task 2',
    status: 'Done',
  },
  {
    id: Math.floor(Math.random() * 1000),
    item: 'todo2',
    date: '2022-11-22',
    time: '12:43',
    details: 'this is default task 2',
    status: 'Done',
  }
];

const addTodoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    deleteTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
            status: action.payload.status,
            details: action.payload.details
          };
        }
        return todo;
      });
    },
  },

});

export const { addTodos, deleteTodos, updateTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
