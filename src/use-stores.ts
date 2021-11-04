import { useContext, createContext } from 'react';
import TodoStore from './store/store';

export const TodoContext = createContext({
  todoStore: new TodoStore(),
});

export const useStore = () => {
  return useContext(TodoContext);
};
