import { Grid,  } from '@mui/material';
import { ReactNode } from 'react';

export const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <Grid container
        sx={{minHeight:'100vh'}}>

        <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           {children}
        </Grid>

        <Grid item xs={12} md={6} sx={{bgcolor:'white', display:{xs:'none', lg:'block'}}}>
        </Grid>
    </Grid>
  )
}
