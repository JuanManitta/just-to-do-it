import { FilterList, Search } from '@mui/icons-material';
import { TextField, Typography, Grid, Button, Select, MenuItem, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import { addTask } from '../../../features/just-todo-it/taskSlice';





export const InputSearch = () => {

    const [quickFilters, setQuickFilters] = useState('all')

    

   

  return (
    <>
    <Grid container
        justifyContent="space-between"
        sx={{mt:2}}>
        <Typography variant='h2'
            sx={{fontSize:'1.2rem', fontWeight:'700', mb:{xs: 3, md:0}}}>
                ... No dejemos para mañana lo que podemos hacer hoy"
        </Typography>
        <Button variant='contained'
            sx={{bgcolor:'secondary.main'}}>
            <Typography fontSize={12} fontWeight='700'>New task</Typography>
        </Button>

        </Grid>
        <Grid container
        sx={{mt:4}}
        marginBottom={5}>
            <Grid item  xs={2}>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={quickFilters}
                    label="Quick Filters"
                    fullWidth    
                    IconComponent={FilterList}
                    sx={{bgcolor:'white',
                    borderTopLeftRadius:'8px',
                    borderBottomLeftRadius:'8px',
                    borderBottomRightRadius:'0px',
                    borderTopRightRadius:'0px',
                    '& .MuiOutlinedInput-notchedOutline':{
                        border:'none',
                        boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' 
                    }}}>
                    <MenuItem value={'all'}>All</MenuItem>
                    <MenuItem value={'work'}> Work</MenuItem>
                    <MenuItem value={'life'}> Life</MenuItem>
                    <MenuItem value={'others'}> Others</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={10}>
                <TextField
                fullWidth
                placeholder="buscar"
                sx={{ backgroundColor:'white',
                borderTopRightRadius:'8px',
                borderBottomRightRadius:'8px',
                borderTopLeftRadius:'0px',
                '& .MuiOutlinedInput-notchedOutline': {
                    border:'none',
                    boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' 
                },}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                              <Search/>
                          </IconButton>
                      </InputAdornment>
                    )
                }}/>
            </Grid>
        </Grid>
</>
    )
}
