import { Grid, Typography, IconButton, Checkbox } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { deleteCompletedTask } from '../../../features/just-todo-it/completedTasksSlice';
import { addTask } from '../../../features/just-todo-it/taskSlice';
import { Task } from '../../../types/taskType';
import { MyPopover } from '../popover/MyPopover';





export const CompletedTaskCards = () => {

    const completedTasks = useSelector((state: RootState) => state.completedTasks);
    const dispatch = useDispatch();

    const handleDeleteTask = ( task:Task ) =>{
        dispatch(deleteCompletedTask(task))
    };

    const handleIncompleteTask = ( task:Task ) =>{
        dispatch(deleteCompletedTask(task))
        dispatch(addTask(task))
    };


  return (
    <Grid item xs={12} md={3}
        sx={{display:{xs:'none', md:'block'}}}>
        <Grid
            justifyContent="center"
            alignContent="center"
            marginTop="1rem">
            <Typography variant='h4' component='h2' textAlign="center"
            marginBottom={1}>
                Completed tasks
            </Typography>
        </Grid>
        <Grid container
            justifyContent="center"
            alignContent="center">
            {
                completedTasks.map(task => (
                <Grid item xs={12} key={task.id}>
                    <Grid container
                        sx={{bgcolor:'secondary.main', borderRadius:'10px', border:'1px solid #fff',
                         p:1.5, mb:1, mt:2, boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' }}>
                            <Typography 
                                fontSize="1.1rem" 
                                component="h2"
                                fontWeight="bold"
                                marginBottom="1rem">
                                {task.title}
                            </Typography>
                            
                            <Grid container
                                justifyContent="space-between"
                                alignItems="center">

                                 <Grid item xs={8}>
                                    <Typography
                                    bgcolor={task.tag === 'Life' 
                                        ? 'info.main' 
                                        : task.tag === 'Work' 
                                        ? 'info.light' 
                                        : 'info.dark'}
                                    sx={{ fontSize:'0.8rem', textAlign:'center', width:'55px',
                                        height: '23px', borderRadius:'4px', p:0.3, color:'text.default'}}>
                                        {task.tag}
                                    </Typography>
                                </Grid>

                                <Grid item xs={4}
                                display='flex'>

                                <MyPopover content='Delete'>
                                <IconButton onClick={() => handleDeleteTask(task)}>
                                    <DeleteOutline fontSize='small'/>
                                </IconButton>
                                </MyPopover>

                                <MyPopover content='Incomplete'>
                                <Checkbox
                                    color='info'
                                    size='small'
                                    checked={task.done}
                                    onChange={() => handleIncompleteTask(task)}
                                    />
                                </MyPopover>
                                </Grid>
                            </Grid>
                    </Grid>
                </Grid>
             ))
            }
        </Grid>
    </Grid>
  )
}
