import { AuthLayout } from "../layout/AuthLayout"
import { Grid, TextField, Typography, Button, CircularProgress } from '@mui/material';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from "../../hooks/useAuthStore";

export const LoginPage = () => {

  const { startLogin, errorMessage, status } = useAuthStore();


  const {email, password, handleOnChange } = useForm();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    startLogin({email, password});
  }


  return (
    <AuthLayout>
      {
        status === 'checking' 
        ? <CircularProgress color="warning" /> 
        :
      <Grid minWidth='70%'>
        <Typography component='h1' variant='h4' textAlign='center'>Welcome back!</Typography>

          <form style={{marginTop:'2rem'}} onSubmit={onSubmit}>
            <Typography sx={{fontWeight:'bold', mb:1}}>Email</Typography>
            <TextField fullWidth placeholder="Enter your email" type='email' name="email"
            value={email} 
            onChange={handleOnChange}/>
            <Typography sx={{fontWeight:'bold', mb:1, mt:4}}>Password</Typography>
            <TextField fullWidth placeholder="*******" type='password' name="password" 
            value={password}
            onChange={handleOnChange}/>
            <Typography sx={{fontSize:'0.8rem', color:'green'}}>
              {errorMessage}
            </Typography>
    
            <Button type="submit" variant="contained" fullWidth sx={{mt:6, bgcolor:'info.dark'}}
            onClick={onSubmit}>
              <Typography>Sign In</Typography>
            </Button>
            <Grid minWidth='100%' sx={{mt:2}}>
            <Link to={'/auth/register'} style={{textDecoration:'none'}}>
              <Typography sx={{textAlign:'right'}}>Don't have accout? register.</Typography>
            </Link>
          </Grid>
        </form>
      </Grid>
      }
    </AuthLayout>
  )
}
