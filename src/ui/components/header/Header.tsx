import { AppBar, IconButton, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../../assets/logo.svg';
import React from 'react';
import { DarkModeButton } from '../dark-mode-button/DarkModeButton';

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
}


export const Header = () => {

  



  return (
    <ElevationScroll>
    <AppBar position="sticky"
        sx={{backgroundColor:'secondary.main',
        boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)' }}>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        {/* <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} /> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'bold', textTransform:'uppercase' }}>
          Just Todo It
        <IconButton>
          <img style={{marginLeft:'6px', width:'25px'}} src={logo} alt="" />
        </IconButton>
        </Typography>
        <DarkModeButton/>
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}
