import tasksApi from '../api/tasksApi';
import { addTask, deleteTask, editTask, handleSkeletonLoading, loadingTasks } from '../features/just-todo-it/taskSlice';
import { Task } from '../types/taskType';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useTasksStore = () => {

  const { tasks, activeFilter, searcherWord, isLoadingTasks } = useSelector((state: RootState) => state.task);
  const { user } = useSelector((state: RootState) => state.auth);

  
  const dispatch = useDispatch();

  const startCreatingTask = async(task: Task) => {

        const { data } = await tasksApi.post('/tasks/newTask', task );
        dispatch(addTask({...task, id: data.task.id, user}))
    };

  const startLoadingTasks = async() =>{
      
      try {
        const { data } = await tasksApi.get('/tasks');
        dispatch(loadingTasks(data.tasks))
        
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
      dispatch(handleSkeletonLoading())
      }, 500);
    };

  const startEditingTask = async(task: Task) =>{


      try {
       await tasksApi.put(`/tasks/${task.id}`, task);
       dispatch(editTask({...task, user}))

        
      } catch (error) {
        console.log(error);
      }
    };

  const startDeletingTask = async(task: Task) =>{
    try {

      await tasksApi.delete(`/tasks/${task.id}`);
      dispatch(deleteTask(task))
        
      } catch (error) {
        console.log(error);
      }
    };

  return {
    startCreatingTask,
    startLoadingTasks,
    startEditingTask,
    startDeletingTask,
    tasks,
    activeFilter,
    searcherWord,
    isLoadingTasks

  }
}
