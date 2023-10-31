import React, { useState, useEffect } from 'react';
import { Item } from './item';

export function List() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Load todos from localStorage on component mount
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(savedTodos)
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever the todos state changes
    if(!localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo, index) => (
        <Item
          key={index}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => toggleTodo(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}


