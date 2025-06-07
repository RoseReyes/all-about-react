import { createContext, useContext } from 'react';

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
});
