import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Button } from '@mui/material';




export const AddTaskModal = () => {
  return (
    <Grid>
      <Dialog open>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You must do something?
          </DialogContentText>
          <form action="">
          <TextField
            autoFocus
            margin="normal"
            id="title"
            label="title"
            type="text"
            variant="outlined"
            />
          <TextField
            autoFocus
            margin="normal"
            id="description"
            label="description"
            type="text"
            fullWidth
            variant="outlined"
            />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            fullWidth
            defaultValue="EUR"
            helperText="Please select your currency"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Add</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
