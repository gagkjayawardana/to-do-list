import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { data: [] },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.data.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedTodo };
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((todo) => todo.id !== id);
    }
  }
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
