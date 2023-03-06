import { AppBar, IconButton, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../../assets/logo.svg';
import React from 'react';
import { DarkModeButton } from '../dark-mode-button/DarkModeButton';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { Logout } from '@mui/icons-material';

interface ElevationScrollProps {
  children: React.ReactElement;
}

const ElevationScroll: React.FC<ElevationScrollProps> = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'secondary.main' : 'primary.main'
    },
  });
};



export const Header = () => {


//TODO: arreglar el tipo de user 
  const { user, startLogout }:any = useAuthStore();
  const name = user.name

  const onLogout = () => {
    startLogout()
  }
  
  
  return (
    <ElevationScroll>
    <AppBar position="sticky"
        sx={{backgroundColor:'secondary.main',
        boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'bold', textTransform:'uppercase' }}>
          Just Task It
        <IconButton disabled>
          <img style={{marginLeft:'6px', width:'20px', marginBottom:'3px'}} src={logo} alt="" />
        </IconButton>
        </Typography>
        <Typography  sx={{mr:1, fontWeight:'bold', fontSize:'1.1rem'}}>{name}</Typography>
          <IconButton sx={{mr:10}} onClick={onLogout}>
          <Logout fontSize='small'/>
          </IconButton>
        <DarkModeButton/>
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}
