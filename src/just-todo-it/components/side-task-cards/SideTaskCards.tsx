import { Grid, Typography, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';



export const SideTaskCards = () => {


    const taskList = useSelector((state: RootState) => state.task)
  return (
    <Grid item xs={12} md={3}
        sx={{display:{xs:'none', md:'block'}}}>
        <Grid
            justifyContent="center"
            alignContent="center"
            marginTop="1rem">
            <Typography variant='h4' component='h2' textAlign="center"
            marginBottom={1}>
                All the tasks
            </Typography>
        </Grid>
        <Grid container
            justifyContent="center"
            alignContent="center">
            {
                taskList.map(todo => (
                <Grid item xs={12} key={todo.id}>
                    <Grid container
                        justifyContent="space-between"
                        sx={{bgcolor:'white', borderRadius:'10px',
                         p:1.5, mb:1, mt:2, boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' }}>
                            <Typography 
                                fontSize="1.1rem" 
                                component="h2"
                                fontWeight="bold"
                                textTransform="capitalize"
                                marginBottom="1rem">
                                {todo.title}
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
                                    {todo.tag}
                                </Typography>
                                <IconButton>
                                    <MoreVert fontSize='small'/>
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
