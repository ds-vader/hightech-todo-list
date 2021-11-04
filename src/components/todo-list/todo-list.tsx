import React, { FC } from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

interface IProps {
  items: Array<Todo>;
  onToggleImportant: (id: ID) => void;
  onToggleDone: (id: ID) => void;
  onDelete: (id: ID) => void;
}

const TodoList: FC<IProps> = ({
  items,
  onToggleImportant,
  onToggleDone,
  onDelete,
}) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list list-group">{elements}</ul>;
};

export default TodoList;
