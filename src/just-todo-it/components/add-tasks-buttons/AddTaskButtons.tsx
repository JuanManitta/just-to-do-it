import { Grid, Typography, IconButton, TextField } from '@mui/material';
import { MoreVert, AddCircle, LibraryAdd } from '@mui/icons-material';
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../features/just-todo-it/taskSlice';


const taskSample ={
    title: '',
    description:'',
    tag:''
}

export const AddTaskButtons = () => {

    const [addingNewTask, setaddingNewTask] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [formState, setFormState] = useState(taskSample)

    const {title, description, tag} = formState
    
    
    const onChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
        const{name, value} = target
        setFormState({
            ...formState,
            [name]:value
        })
    };

    const handleClick = (tag:string) =>{
        setaddingNewTask(false);
        setIsOpen(true)
        setFormState({
            ...formState,
            tag:tag
        })
        
    };

    const taskRef = useRef<HTMLDivElement>(null);
    
  
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if(taskRef.current && !taskRef.current.contains(event.target as Node)
       &&!((event.target as HTMLElement).closest("[data-testid='add-task-button-life']"))
       &&!((event.target as HTMLElement).closest("[data-testid='add-task-button-work']"))
       &&!((event.target as HTMLElement).closest("[data-testid='add-task-button-others']"))
       ){
        setaddingNewTask(false);
      } else {
        setaddingNewTask(true)
      }      
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside);
    
  }, []);

  const dispatch = useDispatch(); 

  const handleFormSubmit = ( event: React.FormEvent) =>{
    event.preventDefault();
    if(formState.description.length < 1 
        || formState.title.length < 1) return;
    setIsOpen(false)
    dispatch(addTask(formState))
    setFormState(taskSample)
  };

  
  

  return (
    <>
    <Grid sx={{display: addingNewTask === false || isOpen === false ? 'none':'block',position:'fixed', top:0, left:0, bottom:0, height:'100%', width:'100%',
      backgroundColor:'secondary.main', opacity:'0.8', zIndex:2 }}>
      </Grid>
      
      <Grid item xs={3}>
       <Grid container
        justifyContent="center">
            <Grid item>
            <Typography marginTop={0.5} fontWeight="bold"
                sx={{ fontSize:{xs:'13px', sm: '1.2rem'}}}>
                    Life Tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex">
            <IconButton >
             <MoreVert  sx={{opacity:0.5}}/>
            </IconButton>
            <IconButton data-testid="add-task-button-life" onClick={() =>handleClick('Life')}>
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
                    Work Tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex"
            alignItems="center">
                <IconButton>
                    <MoreVert sx={{opacity:0.5}}/>
                </IconButton>
                <IconButton data-testid="add-task-button-work" onClick={() =>handleClick('Work')}>
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
                    Other Tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex"
            alignItems="center">
                <IconButton>
                    <MoreVert sx={{opacity:0.5}}/>
                </IconButton>
                <IconButton data-testid="add-task-button-others" onClick={() =>handleClick('Others')}>
                    <AddCircle/>
                </IconButton>
             </Grid>
        </Grid>
    </Grid>

    <Grid item xs={6} sm={6} lg={4}
        className={`${addingNewTask === false || isOpen === false ? 'display__none' : '' }`}
        sx={{position:'fixed', top:'30%', rigth:'37%', maxWidth:'70vw', zIndex:99}}>
            <Grid 
                container sx={{bgcolor: "white", transition:'0.3s', 
                borderRadius: "10px", p: 2,
                boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.18)'}}
                ref={taskRef}>
                    <form onSubmit={handleFormSubmit}>
                    <TextField
                    placeholder='Title'
                    value={title}
                    name='title'
                    onChange={onChange}
                    fullWidth
                    inputProps={{ style: {
                      fontSize:"1.1rem", fontWeight:'bold',
                      marginBottom:'1rem'
                    }}} sx={{'& .MuiOutlinedInput-notchedOutline':{
                      border:'none'
                    }}}/>
                    <TextField
                    placeholder='¿Cuál es tu tarea?'
                    name='description'
                    value={description}
                    onChange={onChange}
                    multiline
                    fullWidth
                    inputProps={{ style: { opacity: 0.7,
                      marginBottom:'2rem', wordWrap: 'break-word'
                    }}} sx={{'& .MuiOutlinedInput-notchedOutline':{
                      border:'none'
                    }}}/>

                  <Grid container
                    justifyContent="space-between">
                    <Grid item xs={6}
                    sx={{
                      borderRadius:'4px',
                      p:0.3}}>
                        <TextField
                            name='tag'
                            value={tag}
                            onChange={onChange}
                            fullWidth sx={{'& .MuiOutlinedInput-notchedOutline':{
                              border:'none'
                            }}}/>
                      </Grid>

                        <IconButton onClick={handleFormSubmit}
                          sx={{'&:hover':{
                            backgroundColor:'white',
                          }}}>
                            <Typography marginRight={1}>Add</Typography>
                            <LibraryAdd/>
                        </IconButton>

                    </Grid>
                </form>
            </Grid>
        </Grid>
    </>
  )
}
