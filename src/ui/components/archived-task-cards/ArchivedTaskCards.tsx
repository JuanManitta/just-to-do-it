import { Grid, Typography, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { deleteArchivedTask } from '../../../features/just-todo-it/archivedTasksSlice';





export const ArchivedTaskCards = () => {

    const archivedTasks = useSelector((state: RootState) => state.archivedTasks);
    const dispatch = useDispatch();

    const handleDeleteTask = ( taskId:string ) =>{
        dispatch(deleteArchivedTask(taskId))
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
                Archived Tasks
            </Typography>
        </Grid>
        <Grid container
            justifyContent="center"
            alignContent="center">
            {
                archivedTasks.map(task => (
                <Grid item xs={12} key={task.id}>
                    <Grid container
                        justifyContent="space-between"
                        sx={{bgcolor:'white', borderRadius:'10px',
                         p:1.5, mb:1, mt:2, boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' }}>
                            <Typography 
                                fontSize="1.1rem" 
                                component="h2"
                                fontWeight="bold"
                                marginBottom="1rem">
                                {task.title}
                            </Typography>
                            <Grid container
                                justifyContent="space-between">
                                <Typography
                                bgcolor='white'
                                    sx={{
                                    fontSize:'0.8rem',
                                    textAlign:'center',
                                    width:'43px',
                                    height: '23px',
                                    borderRadius:'4px',
                                    p:0.3}}>
                                    {task.tag}
                                </Typography>
                                <IconButton onClick={() => handleDeleteTask(task.id)}>
                                    <DeleteOutline fontSize='small'/>
                                </IconButton>
                            </Grid>
                    </Grid>
                </Grid>
             ))
            }
        </Grid>
    </Grid>
  )
}
