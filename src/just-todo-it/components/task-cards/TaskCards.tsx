import { Grid, Typography, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Task } from '../../../types/taskType';





export const TaskCards = () => {

  const tasksList: Task[] = useSelector((state: RootState) => state.task)
  

  return (
    <Grid container spacing={3}
        paddingTop='1.5rem'>
      {
        tasksList.map((todo) => (
          <Grid item xs={12} sm={6} lg={4} key={todo.id}>
            <Grid container sx={{ bgcolor: "white", 
                borderRadius: "10px", p: 2,
                boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)'}}>
              <Typography 
                fontSize="1.1rem" 
                component="h2"
                fontWeight="bold"
                textTransform="capitalize"
                marginBottom="1rem">
                    {todo.title}
                </Typography>
              <Typography
                sx={{opacity: 0.7, mb:'2rem'}}>
                {todo.description}
                </Typography>
                <Typography fontSize="0.8rem"
                    sx={{opacity:0.8, mb:2}}>{todo.date.slice(0,8)}
                </Typography>
                <Grid container
                    justifyContent="space-between">
                <Grid
                    sx={{
                    width:'60px',
                    height: '30px',
                    borderRadius:'4px',
                    p:0.3}}>
                        <Typography bgcolor='white' textAlign="center">{todo.tag}</Typography>
                 </Grid>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </Grid>
            </Grid>
          </Grid>
        ))
      }
    </Grid>
  )
}
