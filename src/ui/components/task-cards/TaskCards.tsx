import React, { useEffect, useRef, useState } from 'react';

import { Task } from '../../../types/taskType';
import { EditTaskCard } from './EditTaskCard';
import { ViewTaskCard } from './ViewTaskCard';

import { Grid, Skeleton } from '@mui/material';
import { useTasksStore } from '../../../hooks/useTasksStore';

export const TaskCards = () => {

  //STATES & REDUX
  const { tasks, activeFilter, searcherWord } = useTasksStore()
  const { startLoadingTasks, startEditingTask, startDeletingTask, isLoadingTasks } = useTasksStore();


  //HTTP REQUEST
  useEffect(() => {
    startLoadingTasks()
  }, [])
  
  // MANIPULATE SELECTED TASK
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  

  // TO EDIT TASK
  const [formState, setFormState] = useState({
    title:'',
    description: '',
    tag: selectedTask?.tag,
    id: '',
    done: false,
  });
  

  
  //EVENTS

  const taskRef = useRef<HTMLDivElement>(null); // TO CLOSE MODAL
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
    
    startEditingTask(formState)
    setSelectedTask(null)   
     
  };


  //CRUD

  const handleTaskEdit =  (task:Task) => {
    setSelectedTask(task)
    
    setFormState({
      ...formState,
      title:task.title,
      description:task.description,
      tag:task.tag,
      id:task.id,
      done: task.done
    })
  };
  
  const handleDeleteTask = (task:Task) => {
    startDeletingTask(task)
  };


  const handleCompleteTask = (task: Task) => {
    const editedTask = {
      ...task,
      done: task.done ? false : true
    }
    startEditingTask(editedTask)
  };

  //TODO: UNDO COMPLETED TASK
  
  //FILTER TASKS

  const filteredTasks = activeFilter === 'All' // FILTER BY ACTIVE TAG
  ? tasks.filter(task => task.title.toLowerCase().includes(searcherWord.toLowerCase())) // IF TAG IS ALL, FILTER BY SEARCHER WORD
  : tasks.filter((task) => task.tag === activeFilter) // IF TAG IS NOT ALL
    .filter(task => task.title.toLowerCase().includes(searcherWord.toLowerCase())); // FILTER BY CHARACTER WORD


  //SKELETON LOADERS
  const skeletonLoaders = new Array(3).fill(1);
  
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
          <>
          {isLoadingTasks 
          ?
          skeletonLoaders.map((skeletonLoader, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4} sx={{display:'flex'}}>
            <Skeleton variant="rounded" width='100%' height={180} animation='wave' />
          </Grid>
          ))
          :
          filteredTasks.filter(task => task.done === false).map((task) => (
          <Grid item xs={12} sm={6} lg={4} key={task.id}>
            {
              selectedTask && selectedTask.id === task.id 
              ? ( <EditTaskCard{...editCardProps} task={task}/> ) 
              : <ViewTaskCard{...viewTaskProps} task={task}/>
            } 
          </Grid>
        ))
      }
      </>
    </Grid>
    </> 
  );
};
