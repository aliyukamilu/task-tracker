import { createSlice } from "@reduxjs/toolkit";
import { todosData } from './todosData'

sessionStorage.setItem('todoData', JSON.stringify(todosData))

const initialState = todosData

const addTodoReducer = createSlice({
  name: "todos",
  initialState,

  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      sessionStorage.setItem('todoData', JSON.stringify(state))
      return state;
    },

    deleteTodos: (state, action) => {
      let newData = state.filter((item) => item.id !== action.payload);
      sessionStorage.setItem('todoData', JSON.stringify(newData))
      return newData
    },

    filterTodo: (state, action) => {
      let newData = state.filter((item) => item.date === action.payload);
      return newData
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
        // 
        return todo;
      });
    },
  },

});

export const { addTodos, deleteTodos, updateTodos, filterTodo } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
