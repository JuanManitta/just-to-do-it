import { Task } from '../types/taskType';


export const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

};

export const getTasksFromLocalStorage = (): Task[] => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
};

export const saveCompletedTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('completedTask', JSON.stringify(tasks));

};

export const getCompletedTasksFromLocalStorage = (): Task[] => {
    const tasks = localStorage.getItem('completedTask');
    return tasks ? JSON.parse(tasks) : [];
};