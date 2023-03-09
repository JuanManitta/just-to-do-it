import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../features/just-todo-it/taskSlice';
import { AddTaskInput } from '../add-task-input/AddTaskInput';

import { MoreVert, AddCircle } from '@mui/icons-material';
import { Grid, Typography, IconButton,  } from '@mui/material';
import { useTasksStore } from '../../../hooks/useTasksStore';

const taskSample ={
    title: '',
    description:'',
    tag:'',
    done: false,
    id: '',
}

export const AddTaskButtons = () => {

    const { startCreatingTask } = useTasksStore();

    //STATES & REDUX
    const [addingNewTask, setAddingNewTask] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useState(taskSample);

    
    const dispatch = useDispatch(); 

    //EVENTOS

    const taskRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
  
        if(taskRef.current && !taskRef.current.contains(event.target as Node)
         &&!((event.target as HTMLElement).closest("[data-testid='add-task-button-life']"))
         &&!((event.target as HTMLElement).closest("[data-testid='add-task-button-work']"))
         &&!((event.target as HTMLElement).closest("[data-testid='add-task-button-others']"))
         ){
          setAddingNewTask(false);
        } else {
          setAddingNewTask(true)
        }      
      }
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside);
      
    }, []);

    //ABRIR FORMULARIO Y AGREGAR TASK
    const handleAddTask = (tag:string) =>{
      setAddingNewTask(false);
      setIsOpen(true)
      setFormState({
          ...formState,
          tag:tag,
          done:false
      });
  };

    //FORMULARIO
    const {title, description, tag} = formState;
    const onChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
        const{name, value} = target
        setFormState({
            ...formState,
            [name]:value
        });
    };

    //SUBMIT
    const handleFormSubmit = ( event: React.FormEvent) =>{
      event.preventDefault();
      if(formState.description.length < 1 || formState.title.length < 1) return;
      setIsOpen(false);
      // dispatch(addTask(formState));
      setFormState(taskSample);

      startCreatingTask(formState);
      
    };

    //TO CHILDREN PROPS
    const addTaskProps = {
          addingNewTask,
          taskRef,
          title,
          description,
          tag,
          isOpen,
          onChange,
          handleFormSubmit
    };
  

  return (
    <>
    <Grid sx={{display: addingNewTask === false || isOpen === false ? 'none':'block',position:'fixed', top:0, left:0, bottom:0, height:'100%', width:'100%',
      backgroundColor:'primary.main', opacity:'0.8', zIndex:2 }}>
      </Grid>
      
    <Grid item xs={3}>
       <Grid container
        justifyContent="center">
            <Grid item>
            <Typography marginTop={0.5} fontWeight="bold"
                sx={{ fontSize:{xs:'13px', sm: '1.2rem'}}}>
                    Life tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex">
            <IconButton disabled>
             <MoreVert/>
            </IconButton>
            <IconButton data-testid="add-task-button-life" onClick={() =>handleAddTask('Life')}>
             <AddCircle/>
            </IconButton>
          </Grid>
        </Grid>
    </Grid>

    <Grid item xs={3}>
       <Grid container
        justifyContent="center">
            <Grid item>
            <Typography marginTop={0.5} fontWeight="bold"
                sx={{ fontSize:{xs:'13px', sm: '1.2rem'}}}>
                    Work tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex"
            alignItems="center">
                <IconButton disabled>
                    <MoreVert/>
                </IconButton>
                <IconButton data-testid="add-task-button-work" onClick={() =>handleAddTask('Work')}>
                    <AddCircle/>
                </IconButton>
             </Grid>
        </Grid>
    </Grid>

    <Grid item xs={3}>
       <Grid container
        justifyContent="center">
            <Grid item>
             <Typography marginTop={0.5} fontWeight="bold"
                sx={{ fontSize:{xs:'13px', sm: '1.2rem'}}}>
                    Other tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex"
            alignItems="center">
                <IconButton disabled>
                    <MoreVert/>
                </IconButton>
                <IconButton data-testid="add-task-button-others" onClick={() =>handleAddTask('Others')}>
                    <AddCircle/>
                </IconButton>
             </Grid>
        </Grid>
    </Grid>

    <AddTaskInput{...addTaskProps}/>
    </>
  )
}
