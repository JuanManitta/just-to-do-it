import { Grid, Typography, IconButton } from '@mui/material';
import { MoreVert, AddCircle } from '@mui/icons-material';
import { AddTaskModal } from '../modal/AddTaskModal';




export const AddTaskButtons = () => {



  return (
    <>
    <Grid item xs={3}>
       <Grid container
        justifyContent="center">
            <Grid item>
            <Typography marginTop={0.5} fontWeight="bold"
                sx={{ fontSize:{xs:'13px', sm: '1.2rem'}}}>
                    Other Tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex">
            <IconButton >
             <MoreVert  sx={{opacity:0.5}}/>
            </IconButton>
            <IconButton>
             <AddCircle/>
            </IconButton>
             </Grid>
        </Grid>
    </Grid>
    <Grid item xs={3}>
        
       <Grid container
        justifyContent="center">
            <Grid item>
            <Typography marginTop={0.5} fontWeight="bold"
                sx={{ fontSize:{xs:'13px', sm: '1.2rem'}}}>
                    Other Tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex"
            alignItems="center">
                <IconButton>
                    <MoreVert sx={{opacity:0.5}}/>
                </IconButton>
                <IconButton>
                    <AddCircle/>
                </IconButton>
             </Grid>
        </Grid>
    </Grid>
    <Grid item xs={3}>
       <Grid container
        justifyContent="center">
            <Grid item>
             <Typography marginTop={0.5} fontWeight="bold"
                sx={{ fontSize:{xs:'13px', sm: '1.2rem'}}}>
                    Other Tasks
                </Typography>
             </Grid> 
            <Grid item
            display="flex"
            alignItems="center">
                <IconButton>
                    <MoreVert sx={{opacity:0.5}}/>
                </IconButton>
                <IconButton>
                    <AddCircle/>
                </IconButton>
             </Grid>
        </Grid>
    </Grid>
    <AddTaskModal/>
    </>
  )
}
