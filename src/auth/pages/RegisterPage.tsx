import { Grid, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore } from '../../hooks/useAuthStore';



export const RegisterPage = () => {
  const { startCreatingUser, errorMessage } = useAuthStore();
  const {email, password, name, handleOnChange } = useForm();

  const onsubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim().length === 0 || password.length < 6 || email.length < 1) return;
    console.log(name, email, password);

    startCreatingUser({name, email, password})
  }
    



  
  return (
  <AuthLayout>
    <Grid minWidth='70%'>
        <Typography component='h1' variant='h4' textAlign='center'>Register</Typography>
        <form style={{marginTop:'2rem'}} onSubmit={onsubmit}>

          <Typography sx={{fontWeight:'bold', mb:1}}>Name</Typography>
          <TextField fullWidth placeholder="John Doe" type='text' name="name" value={name} onChange={handleOnChange}/>

          <Typography sx={{fontWeight:'bold', mb:1, mt:2}}>Email</Typography>
          <TextField fullWidth placeholder="Enter your email" type='email' name="email" value={email} onChange={handleOnChange} />

          <Typography sx={{fontWeight:'bold', mb:1, mt:2}}>Password</Typography>
          <TextField fullWidth placeholder="*******" type='password' name="password" value={password} onChange={handleOnChange} />
          <Typography sx={{fontSize:'0.8rem', color:'green'}}>
              {errorMessage}
            </Typography>
          <Button variant="contained" fullWidth sx={{mt:6, bgcolor:'info.dark'}} type="submit">
            <Typography>Register</Typography>
          </Button>
          <Grid minWidth='100%' sx={{mt:2}}>
            <Link to={'/auth/login'} style={{textDecoration:'none'}}>
              <Typography sx={{textAlign:'right'}}>I have an account, sign in.</Typography>
            </Link>
          </Grid>
        </form>
      </Grid>
    </AuthLayout>
  )
}
