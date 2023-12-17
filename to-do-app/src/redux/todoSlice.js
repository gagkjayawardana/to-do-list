import { createSlice } from '@reduxjs/toolkit';
import { ToDoData } from '../utils/toDoData';

const getInitialState = () => {
  const storedData = localStorage.getItem('todos');
  const todosFromLocalStorage = storedData ? JSON.parse(storedData) : { data: [] };

  const uniqueData = Array.from(
    new Set([...ToDoData, ...todosFromLocalStorage.data].map((item) => item.id))
  ).map((id) => [...ToDoData, ...todosFromLocalStorage.data].find((item) => item.id === id));

  return { data: uniqueData };
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: getInitialState(),
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.data.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedTodo };
      }
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(state));
    }
  }
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
