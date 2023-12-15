import React from 'react';
import ToDoCard from '../../components/ToDoCard/TodoCard';

function HomePage() {
  return (
    <div>
      <ToDoCard userId="1" id="1" title="delectus aut autem" completed="false" />
    </div>
  );
}

export default HomePage;
