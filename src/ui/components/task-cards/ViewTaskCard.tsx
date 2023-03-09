import { Grid, Typography, IconButton, Checkbox } from '@mui/material';
import { MyPopover } from '../popover/MyPopover';
import { Edit, DeleteOutline } from '@mui/icons-material';
import { Task } from '../../../types/taskType';
import { useState } from 'react';



interface ViewTaskCardProps {
    task: Task;
    handleTaskEdit: (task: Task) => void;
    handleDeleteTask: (task: Task) => void;
    handleCompleteTask: (task: Task) => void;
};


export const ViewTaskCard: React.FC<ViewTaskCardProps> = (props) => {
const{
    task,
    handleTaskEdit,
    handleDeleteTask,
    handleCompleteTask,
} = props;


const [hover, setHover] = useState(false);

  return (
   
    <Grid
      container 
      flexDirection="column"
      sx={{ bgcolor: "secondary.main", 
      borderRadius: "10px", p: 2, border:'1px solid #F7EFE5',
      boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.088)'}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
            <MyPopover
              content='Edit'>
            <IconButton data-testid='edit-button' 
              onClick={() => handleTaskEdit(task)}
              sx={{ opacity: hover ? '1' : '0',
                  transition: 'opacity 0.3s'}}>
              <Edit fontSize='small'/> 
            </IconButton>
            </MyPopover>

            <MyPopover
              content='Delete'>
            <IconButton onClick={() => handleDeleteTask(task)}
                data-testid="add-task-button-life"
                sx={{ opacity: hover ? '1' : '0',
                  transition: 'opacity 0.3s'}}>
                <DeleteOutline fontSize='small'/>
            </IconButton>
            </MyPopover>

            <MyPopover
              content='Complete'>
                <Checkbox 
                size='small'
                checked={task.done}
                onChange={() => handleCompleteTask(task)}
                sx={{ opacity: hover ? '1' : '0',
                  transition: 'opacity 0.3s'}}/>
            </MyPopover>
            <Grid
                sx={{
                width:'70px',
                height: '30px',
                p:0.3}}>
                <Typography textAlign="center" bgcolor={task.tag === 'Life' 
                  ? 'info.main' 
                  : task.tag === 'Work' 
                  ? 'info.light' 
                  : 'info.dark'}
                  borderRadius='4px' sx={{color:'text.default', boxShadow: 1}}>
                  {task.tag}
                </Typography>
            </Grid>
          </Grid>
    </Grid>

  )
}
