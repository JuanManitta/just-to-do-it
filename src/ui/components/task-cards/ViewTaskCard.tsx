import { Grid, Typography, IconButton } from '@mui/material';
import { MyPopover } from '../popover/MyPopover';
import { Edit, DeleteOutline, ArchiveOutlined } from '@mui/icons-material';
import { Task } from '../../../types/taskType';


interface ViewTaskCardProps {
    task: Task;
    handleTaskEdit: (task: Task) => void;
    handleDeleteTask: (task: Task) => void;
    handleArchiveTask: (task: Task) => void;
}
export const ViewTaskCard: React.FC<ViewTaskCardProps> = (props) => {

const{
    task,
    handleTaskEdit,
    handleDeleteTask,
    handleArchiveTask,
} = props


  return (
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
                <DeleteOutline/>
            </IconButton>
            </MyPopover>
            <MyPopover
              content='Archive'>
            <IconButton
                onClick={() =>handleArchiveTask(task)}>
                  <ArchiveOutlined/>
              </IconButton>
            </MyPopover>
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
  )
}
