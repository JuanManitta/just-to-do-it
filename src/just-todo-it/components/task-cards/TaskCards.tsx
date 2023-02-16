import { Grid, Typography, IconButton, TextField } from '@mui/material';
import { ArchiveOutlined, DeleteOutline, Edit, Save } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { Task } from '../../../types/taskType';
import { useEffect, useRef, useState } from 'react';
import { deleteTask, editTask } from '../../../features/just-todo-it/taskSlice';
import { addArchivedTask } from '../../../features/just-todo-it/archivedTasksSlice';



export const TaskCards = () => {
  
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const tasksList: Task[] = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    title:'',
    description: '',
    tag:'',
  });
  
  
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

  
  const handleTaskClick =  (task:Task) => {
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

  const {title, description, tag} = formState

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
  }

  const handleArchiveTask = (task:Task) => {
      dispatch(addArchivedTask(task));
      handleDeleteTask(task);
  }

  



  return (
    <>
    <Grid sx={{display: !selectedTask ? 'none':'block',position:'fixed', top:0, left:0, bottom:0, height:'100%', width:'100%',
      backgroundColor:'secondary.main', opacity:'0.8', zIndex:2 }}>
      </Grid>

    
    <Grid container spacing={3}
        paddingTop='1.5rem'>
      {
        tasksList.map((task) => (
          <Grid item xs={12} sm={6} lg={4} key={task.id}>
            {selectedTask && selectedTask.id === task.id ? (
            <Grid className={`task ${selectedTask && selectedTask.id === task.id ? 'task__selected task__selected--animate' : ''}`}

                container sx={{bgcolor: "white", transition:'0.3s', 
                borderRadius: "10px", p: 2,
                boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)',}}
                ref={taskRef}
                >
                  <form onSubmit={handleSubmit}>
                    <TextField 
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
                    value={description}
                    name='description'
                    onChange={onChange}
                    multiline
                    fullWidth
                    inputProps={{ style: { opacity: 0.7,
                      marginBottom:'2rem', wordWrap: 'break-word'
                    }}} sx={{'& .MuiOutlinedInput-notchedOutline':{
                      border:'none'
                    }}}/>
                    {/* <Typography fontSize="0.8rem"
                    sx={{opacity:0.8, mb:2}}>{task.date.slice(0,8)}
                  </Typography> */}
                  <Grid container
                  justifyContent='space-between'>
                    <Grid item xs={6}
                    sx={{
                      borderRadius:'4px',
                      p:0.3}}>
                        <TextField 
                        value={tag}
                        name='tag'
                        onChange={onChange}
                        inputProps={{ style: { opacity: 0.7, 
                        }}} sx={{'& .MuiOutlinedInput-notchedOutline':{
                          border:'none'
                        }}}/>
                      </Grid>
                          <IconButton sx={{'&:hover':{ bgcolor:'white'}}} onClick={handleSubmit}>
                              <Save/>
                          </IconButton>
                        </Grid>
                      </form>
                  </Grid>
                  
                  ) : 
                  <Grid
                    container 
                    flexDirection="column"
                    sx={{cursor:'pointer', bgcolor: "white", 
                    borderRadius: "10px", p: 2,
                    boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.088)'}}
                  >
                    <Typography 
                      fontSize="1.1rem" 
                      component="h2"
                      fontWeight="bold"
                      marginBottom="1rem">
                      {task.title}
                    </Typography>
                       <Typography
                      sx={{opacity: 0.7, mb:'2rem'}}>
                      {task.description}
                    </Typography> 
       
                    
                    <Grid container
                          justifyContent="space-around"
                          alignItems="center"
                          marginTop={4}>

                        <IconButton data-testid='edit-button' 
                            onClick={() => handleTaskClick(task)}>
                            <Edit  fontSize='small'/> 
                          </IconButton>
                          <IconButton onClick={() => handleDeleteTask(task)}
                              data-testid="add-task-button-life" >
                              <DeleteOutline/>
                          </IconButton> 
                          <IconButton onClick={() =>handleArchiveTask(task)}>
                              <ArchiveOutlined/>
                          </IconButton> 
                          <Grid
                              sx={{
                              width:'70px',
                              height: '30px',
                              p:0.3}}>
                              <Typography textAlign="center" bgcolor={task.tag === 'Life' 
                                ? 'primary.main' 
                                : task.tag === 'Work' 
                                ? 'secondary.main' 
                                : 'grey'}
                                borderRadius='4px'>
                                {task.tag}
                              </Typography>
                          </Grid>
                        </Grid>
                  </Grid>
                  }
          </Grid>
        ))
      }
    </Grid>
    </> 
  )
}
