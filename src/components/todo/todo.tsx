import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from '../../use-stores';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-modal-add-form/item-add-form';

import './todo.css';

function Todo() {
  const { todoStore } = useStore();
  const onSearchChange = (text: string): void => {
    todoStore.setSearchText(text);
  };

  const onToggleDone = (id: ID): void => {
    todoStore.toggleDone(id);
  };

  const onToggleImportant = (id: ID): void => {
    todoStore.toggleImportant(id);
  };

  const onDelete = (id: ID) => {
    todoStore.deleteItem(id);
  };
  const onItemAdded = (label: string, endDate: string) => {
    todoStore.addItem(label, endDate);
  };
  const onFilterChange = (filter: filterType) => {
    todoStore.setFilter(filter);
  };

  return (
    <div className="todo-app">
      <AppHeader
        toDo={todoStore.incompleteItemsCount}
        done={todoStore.doneItemsCount}
      />

      <div className="search-panel d-flex">
        <SearchPanel onSearchChange={onSearchChange} />

        <ItemStatusFilter
          filter={todoStore.filter}
          onFilterChange={onFilterChange}
        />
      </div>

      <TodoList
        items={todoStore.renderItems}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
        onDelete={onDelete}
      />
      <ItemAddForm onItemAdded={onItemAdded} />
    </div>
  );
}

export default observer(Todo);
