import { Grid, Typography, IconButton, Checkbox } from '@mui/material';
import { MyPopover } from '../popover/MyPopover';
import { Edit, DeleteOutline, CheckBox } from '@mui/icons-material';
import { Task } from '../../../types/taskType';


interface ViewTaskCardProps {
    task: Task;
    handleTaskEdit: (task: Task) => void;
    handleDeleteTask: (task: Task) => void;
    handleCompleteTask: (task: Task) => void;
}
export const ViewTaskCard: React.FC<ViewTaskCardProps> = (props) => {

const{
    task,
    handleTaskEdit,
    handleDeleteTask,
    handleCompleteTask,
    
} = props




  return (
    <Grid
      container 
      flexDirection="column"
      sx={{cursor:'pointer', bgcolor: "secondary.main", 
      borderRadius: "10px", p: 2, border:'1px solid #fff',
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
            <MyPopover
              content='Edit'>
            <IconButton data-testid='edit-button' 
              onClick={() => handleTaskEdit(task)}>
              <Edit fontSize='small'/> 
            </IconButton>
            </MyPopover>
            <MyPopover
              content='Delete'>
            <IconButton onClick={() => handleDeleteTask(task)}
                data-testid="add-task-button-life" >
                <DeleteOutline fontSize='small'/>
            </IconButton>
            </MyPopover>
            <MyPopover
              content='Complete'>
                <Checkbox 
                size='small'
                checked={task.done}
                onChange={() => handleCompleteTask(task)}/>
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
                  borderRadius='4px' sx={{color:'text.default'}}>
                  {task.tag}
                </Typography>
            </Grid>
          </Grid>
    </Grid>
  )
}
