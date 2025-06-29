import { createContext, useContext, useState } from 'react';
import { tasks, steps, metrics } from '../data/taskData';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState(tasks);
  return (
    <TaskContext.Provider value={{ tasks: taskList, setTasks: setTaskList, steps, metrics }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
