import { Grid, Typography, IconButton, Checkbox } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { Task } from '../../../types/taskType';
import { MyPopover } from '../popover/MyPopover';
import { useState } from 'react';
import { useTasksStore } from '../../../hooks/useTasksStore';




export const CompletedTaskCards = () => {

    const [hover, setHover] = useState(false);
    const { tasks, startEditingTask, startDeletingTask } = useTasksStore()


    const handleCompleteTask = (task: Task) => {
        const editedTask = {
          ...task,
          done: task.done ? false : true
        }
        startEditingTask(editedTask)
    };
    const handleDeleteTask = (task:Task) => {
        startDeletingTask(task)
    };

  return (
    <Grid item xs={12} md={3}
        sx={{display:{xs:'none', md:'block'}}}>
        <Grid
            justifyContent="center"
            alignContent="center"
            marginTop="1rem">
            <Typography variant='h4' component='h2' textAlign="center"
            marginBottom={1} fontWeight='400'>
                Completed Tasks
            </Typography>
        </Grid>
        <Grid container
            justifyContent="center"
            alignContent="center">
            {
            tasks.filter(task => task.done === true).map(task => (
            <Grid item xs={12} key={task.id}>
                <Grid container
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    sx={{bgcolor:'secondary.main', borderRadius:'10px', border:'1px solid #F7EFE5',
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
                        <IconButton
                        sx={{ opacity: hover ? '1' : '0',
                        transition: 'opacity 0.3s'}} onClick={() => handleDeleteTask(task)}>
                            <DeleteOutline fontSize='small'/>
                        </IconButton>
                        </MyPopover>
                        <MyPopover content='Incomplete'>
                        <Checkbox
                            onChange={() => handleCompleteTask(task)}
                            color='default'
                            size='small'
                            checked={task.done}
                            sx={{ opacity: hover ? '1' : '0',
                            transition: 'opacity 0.3s'}}
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
