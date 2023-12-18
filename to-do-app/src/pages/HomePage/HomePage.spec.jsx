import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from './HomePage';

const mockStore = configureStore([]);
const store = mockStore({
  todos: {
    data: [
      {
        userId: 3,
        id: 50,
        title: 'Test Todo 1',
        completed: false,
        deadline: '2023-12-31',
        priority: 'High'
      }
    ]
  }
});

test('renders HomePage component correctly', () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );

  expect(screen.getByText('ToDo Home')).toBeInTheDocument();
  expect(screen.getByText('Submit New')).toBeInTheDocument();
  expect(screen.getByText('ToDo List')).toBeInTheDocument();
});

test('submits a new todo', async () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );

  await act(async () => {
    fireEvent.click(screen.getByText('Submit'));
  });

  await waitFor(() => {
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Todo' } });

    const deadlineField = screen.queryByLabelText('Deadline');
    if (deadlineField) {
      fireEvent.change(deadlineField.querySelector('input'), {
        target: { value: '2024-01-01' }
      });
    }

    const priorityField = screen.queryByLabelText('Priority');
    if (priorityField) {
      fireEvent.change(priorityField.querySelector('input'), { target: { value: 'High' } });
    }
  });

  await act(async () => {
    fireEvent.click(screen.getByText('Submit'));
  });
});
