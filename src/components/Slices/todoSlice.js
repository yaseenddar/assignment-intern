import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [
     
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTask: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },
    completeTask: (state, action) => {
      const todo = state.todoList.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isComplete = true;
      }
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

export const { addTodo, removeTask, completeTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;
