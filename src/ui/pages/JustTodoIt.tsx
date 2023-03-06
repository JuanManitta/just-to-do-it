import { FiltersSearch } from '../components/filters-search/FiltersSearch';
import { AddTaskButtons } from '../components/add-tasks-buttons/AddTaskButtons';
import { TaskCards } from '../components/task-cards/TaskCards';
import { CompletedTaskCards } from '../components/completed-task-cards/CompletedTaskCards';
import { Header } from '../components/header/Header';

import { Divider, Grid  } from '@mui/material';




export const JustTodoIt = () => {
 
  return (
  <>
    <Header/>
    <main>
        <Grid container
            sx={{minHeight:'100vh'}}>
            <Grid component="section" item xs={12} sm={12} md={8}>
                <FiltersSearch/>
                <Grid container
                    marginTop={2}
                    justifyContent="space-around">

                    {/* BUTTONS & TASKS */}
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
            <CompletedTaskCards/>
        </Grid>
    </main>
  </>
  );
};
