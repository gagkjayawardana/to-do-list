import React from 'react';
import { render } from '@testing-library/react';
import ToDoCard from './TodoCard';

describe('ToDoCard', () => {
  const todo = {
    userId: 3,
    id: 50,
    title: 'Test Todo',
    completed: false,
    deadline: '2023-12-31',
    priority: 'High'
  };

  it('renders ToDoCard component correctly', () => {
    const { getByText } = render(
      <ToDoCard
        userId={todo.userId}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        deadline={todo.deadline}
        priority={todo.priority}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(getByText(`User ID: ${todo.userId}`)).toBeInTheDocument();
    expect(getByText(`ID: ${todo.id}`)).toBeInTheDocument();
    expect(getByText(`Title: ${todo.title}`)).toBeInTheDocument();
    expect(getByText(`Deadline: ${todo.deadline}`)).toBeInTheDocument();
    expect(getByText(`Priority: ${todo.priority}`)).toBeInTheDocument();
    expect(getByText(`Completed: ${todo.completed ? 'True' : 'False'}`)).toBeInTheDocument();
  });
});
