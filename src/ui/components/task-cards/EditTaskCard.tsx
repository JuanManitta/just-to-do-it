import { Task } from '../../../types/taskType';
import { MyPopover } from '../popover/MyPopover';

import { Grid, TextField, Typography, IconButton } from '@mui/material';
import { Save } from '@mui/icons-material';

interface EditCardsProps {
    selectedTask: Task | null;
    handleSubmit: (event: React.FormEvent) => void;
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    taskRef: React.RefObject<HTMLDivElement>;
    title: string;
    description: string;
    task: Task
  };


export const EditTaskCard: React.FC<EditCardsProps> = (props) => {
const {
    selectedTask,
    handleSubmit,
    onChange,
    task,
    taskRef,
    title,
    description,
} = props;



  return (
    <Grid className={`task ${selectedTask && selectedTask.id === task.id ? 'task__selected task__selected--animate' : ''}`}

        container sx={{bgcolor: "secondary.main", transition:'0.3s', 
        borderRadius: "10px", p: 2,
        boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.142)',}}
        ref={taskRef}
        >
          <form onSubmit={handleSubmit}>
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
          <Grid container
          justifyContent='space-between'>
            <Grid item xs={3} sm={2}
            sx={{
              borderRadius:'4px',
              p:0.3}}>
                <Typography textAlign="center" bgcolor={task.tag === 'Life' 
                    ? 'info.main' 
                    : task.tag === 'Work' 
                    ? 'info.light' 
                    : 'info.dark'}
                    borderRadius='4px' sx={{fontSize:'14px', boxShadow:1}}>
                    {task.tag}
                  </Typography>
              </Grid>
              <IconButton sx={{'&:hover':{ bgcolor:'white'}}} onClick={handleSubmit}>
                  <Save/>
              </IconButton>
            </Grid>
        </form>
    </Grid>
  );
};
