import { Grid, TextField, Typography, IconButton } from '@mui/material';
import { LibraryAdd } from '@mui/icons-material';

interface AddTaskInputProps {
    addingNewTask: boolean;
    taskRef: React.RefObject<HTMLDivElement>;
    title: string;
    description: string;
    tag: string;
    isOpen: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFormSubmit: (event: React.FormEvent) => void;
};


export const AddTaskInput: React.FC<AddTaskInputProps> = (props) => {
    const {
        addingNewTask,
        taskRef,
        title,
        description,
        tag,
        isOpen,
        onChange,
        handleFormSubmit
    } = props;



  return (
    <Grid item
        className={`${addingNewTask === false || isOpen === false ? 'display__none' : '' }`}
        sx={{position:'fixed', top:'30%', rigth:'37%', maxWidth:'70vw', zIndex:99}}>
            <Grid 
                container sx={{bgcolor: "secondary.main", transition:'0.3s',
                border: '1px solid #fff', 
                borderRadius: "10px", p: 2,
                boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.18)'}}
                ref={taskRef}>
                    <form onSubmit={handleFormSubmit}>
                    <TextField
                    placeholder='Title'
                    value={title}
                    name='title'
                    onChange={onChange}
                    fullWidth
                    inputProps={{ style: {
                      fontSize:"1.1rem", fontWeight:'bold',
                      marginBottom:'1rem'
                    }}} sx={{'& .MuiOutlinedInput-notchedOutline':{
                      border:'none'
                    }}}/>
                    <TextField
                    placeholder='¿Cuál es tu tarea?'
                    name='description'
                    value={description}
                    onChange={onChange}
                    multiline
                    fullWidth
                    inputProps={{ style: { opacity: 0.7,
                      marginBottom:'2rem', wordWrap: 'break-word'
                    }}} sx={{'& .MuiOutlinedInput-notchedOutline':{
                      border:'none'
                    }}}/>

                  <Grid container
                    justifyContent="space-between">
                    <Grid item xs={3} sm={2}
                    sx={{
                      borderRadius:'4px',
                      p:0.3}}>
                        <Typography textAlign="center" bgcolor={tag === 'Life' 
                            ? 'info.main' 
                            : tag === 'Work' 
                            ? 'info.light' 
                            : 'info.dark'}
                            borderRadius='4px' sx={{color: 'text.default'}}>
                            {tag}
                        </Typography>
                      </Grid>

                        <IconButton onClick={handleFormSubmit}
                          sx={{'&:hover':{
                            backgroundColor:'inherit',
                          }}}>
                            <Typography marginRight={1}>Add</Typography>
                            <LibraryAdd/>
                        </IconButton>
                    </Grid>
                </form>
            </Grid>
      </Grid>
  );
};
