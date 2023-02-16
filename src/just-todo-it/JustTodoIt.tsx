import { InputSearch } from './components/input/InputSearch';
import { AddTaskButtons } from './components/add-tasks-buttons/AddTaskButtons';
import { TaskCards } from './components/task-cards/TaskCards';
import { SideTaskCards } from './components/side-task-cards/SideTaskCards';
import { Header } from './components/header/Header';

import { Divider, Grid  } from '@mui/material';




export const JustTodoIt = () => {
 
  return (
  <>
    <Header/>
    <main>
        <Grid container
            sx={{minHeight:'100vh'}}>
            <Grid component="section" item xs={12} sm={12} md={8}>
                <InputSearch/>
                <Grid container
                    marginTop={2}
                    justifyContent="space-around">
                    <AddTaskButtons/>
                    <TaskCards/>

                </Grid>
            </Grid>
            <Grid item xs={1}
            sx={{display:{xs:'none', md:'flex'}}}
            justifyContent="center">
            <Divider 
                orientation='vertical'
                flexItem
                sx={{minHeight:'100vh'}}/>
            </Grid>
            <SideTaskCards/>
        </Grid>
    </main>
  </>
  )
}
