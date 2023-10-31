import React from 'react';

export function Item({ text, completed, onToggle, onDelete }) {
  return (
    <div>
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={onToggle}
      >
        {text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

