import todoReducer, { addTodo, editTodo, deleteTodo } from './todoSlice';

describe('todoSlice reducers', () => {
  it('should handle addTodo', () => {
    const initialState = { data: [] };
    const action = addTodo({ id: 1, title: 'Test Todo' });
    const newState = todoReducer(initialState, action);
    expect(newState.data.length).toBe(1);
    expect(newState.data[0].title).toBe('Test Todo');
  });

  it('should handle editTodo', () => {
    const initialState = { data: [{ id: 1, title: 'Original Todo' }] };
    const action = editTodo({ id: 1, updatedTodo: { title: 'Updated Todo' } });
    const newState = todoReducer(initialState, action);
    expect(newState.data.length).toBe(1);
    expect(newState.data[0].title).toBe('Updated Todo');
  });

  it('should handle deleteTodo', () => {
    const initialState = { data: [{ id: 1, title: 'Test Todo' }] };
    const action = deleteTodo(1);
    const newState = todoReducer(initialState, action);
    expect(newState.data.length).toBe(0);
  });
});
