import { FilterList, Search } from '@mui/icons-material';
import { TextField, Typography, Grid, Select, MenuItem, InputAdornment, IconButton, SelectChangeEvent } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAndSearchTasks } from '../../../features/just-todo-it/taskSlice';

const state = {
    title:'',
}
export const FiltersSearch = () => {

    const [quickFilters, setQuickFilters] = useState('All')
    const [searchState, setSearchState] = useState(state)
    const { title } = searchState;

    const colorMode = useSelector((state: any) => state.colorMode.value);

    const dispatch = useDispatch();

    const handleInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setSearchState({
            ...searchState,
            [name]:value
        });
    };

    useEffect(() => {
        dispatch(filterAndSearchTasks({
            title,
            filter: quickFilters,
        }))

    }, [searchState, quickFilters ]);


    const handleChange = (event: SelectChangeEvent) => {
        setQuickFilters(event.target.value as string);
    };



  return (
    <>
    <Grid container
        justifyContent="space-between"
        sx={{mt:2}}>
        <Typography variant='h2'
            sx={{fontSize:'1.2rem', fontWeight:'700', mb:{xs: 3, md:0}}}>
                "Pequeños pasos,<b> grandes logros" </b>
        </Typography>
        </Grid>
        <Grid container
        sx={{mt:4}}
        marginBottom={5}>
            <Grid item  xs={4} sm={2}>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={quickFilters}
                    label="Quick Filters"
                    fullWidth    
                    IconComponent={FilterList}
                    onChange={handleChange}
                    sx={{bgcolor:'secondary.main',
                    borderTopLeftRadius:'8px',
                    borderBottomLeftRadius:'8px',
                    borderBottomRightRadius:'0px',
                    borderTopRightRadius:'0px',
                    '& .MuiOutlinedInput-notchedOutline':{
                        border:'1px solid #F7EFE5',
                        boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' 
                    }}}>
                    <MenuItem value={'All'}>All</MenuItem>
                    <MenuItem value={'Work'}> Work</MenuItem>
                    <MenuItem value={'Life'}> Life</MenuItem>
                    <MenuItem value={'Others'}> Others</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={8} sm={10}>
                <TextField
                value={title}
                name='title'
                onChange={handleInputChange}
                fullWidth
                placeholder="Search by title"
                sx={{ backgroundColor:'secondary.main',
                borderTopRightRadius:'8px',
                borderBottomRightRadius:'8px',
                borderTopLeftRadius:'0px',
                '& .MuiOutlinedInput-notchedOutline': {
                    border:'1px solid #F7EFE5',
                    boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' 
                },}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                          <IconButton disabled>
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
