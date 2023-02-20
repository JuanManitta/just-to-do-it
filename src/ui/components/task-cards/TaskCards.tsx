import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';

import { Task } from '../../../types/taskType';
import { EditTaskCard } from './EditTaskCard';
import { ViewTaskCard } from './ViewTaskCard';

import { Grid  } from '@mui/material';
import { completeTask, deleteTask, editTask } from '../../../features/just-todo-it/taskSlice';
import { addCompletedTask } from '../../../features/just-todo-it/completedTasksSlice';




export const TaskCards = () => {

  //STATES & REDUX
  const { initialTasks, activeFilter } = useSelector((state: RootState) => state.task);
 
  
  const dispatch = useDispatch();


  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [formState, setFormState] = useState({
    title:'',
    description: '',
    tag: selectedTask?.tag
  });
  

  
  //EVENTS

  const taskRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if(taskRef.current && !taskRef.current?.contains(event.target as Node)
      &&!((event.target as HTMLElement).closest("[data-testid='edit-button']"))
      ){
        setSelectedTask(null)
      } 
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  
 //FORM & SUBMIT

  const {title, description} = formState;
  const onChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]:value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    dispatch(editTask({...formState, id:selectedTask?.id}))
    setSelectedTask(null)   
     
  };


  //CRUD

  const handleTaskEdit =  (task:Task) => {
    setSelectedTask(task)

    setFormState({
      ...formState,
      title:task.title,
      description:task.description,
      tag:task.tag
    })
  };
  
  const handleDeleteTask = (task:Task) => {
    const taskId = task.id
    dispatch(deleteTask(taskId))
  };


  const handleCompleteTask = (task: Task) => {
    dispatch(completeTask(task.id))
    dispatch(addCompletedTask(task))
    dispatch(deleteTask(task.id))
  };

  //FILTER TASKS

  const filteredTasks = activeFilter === 'All'
    ? initialTasks 
    : initialTasks.filter((task) => task.tag === activeFilter);

    
  //PROPS TO CHILDRENS
  const editCardProps = {
  selectedTask,
  handleSubmit,
  onChange,
  taskRef,
  title,
  description,
  };

  const viewTaskProps = {
    handleTaskEdit,
    handleDeleteTask,
    handleCompleteTask,
  };


  return (
    <>
    <Grid sx={{
      display: !selectedTask 
      ? 'none'
      :'block',position:'fixed', top:0, left:0, bottom:0, height:'100%', width:'100%',
        backgroundColor:'primary.main', opacity:'0.8', zIndex:2 
      }}>
    </Grid>

    <Grid container spacing={3}
        paddingTop='1.5rem'>
      {
        filteredTasks.map((task) => (
          
          <Grid item xs={12} sm={6} lg={4} key={task.id}>
            {
            selectedTask && selectedTask.id === task.id 
            ? ( <EditTaskCard{...editCardProps} task={task}/> ) 
            : <ViewTaskCard{...viewTaskProps} task={task}/>
            }
          </Grid>
        ))
        
      }
    </Grid>
    </> 
  );
};