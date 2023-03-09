import { AppBar, Grid, Icon, IconButton, Toolbar, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../../assets/logo.svg';
import React, { useState } from 'react';
import { DarkModeButton } from '../dark-mode-button/DarkModeButton';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { Logout, Menu } from '@mui/icons-material';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleNavMenu = () => {
    setIsOpen(!isOpen)
  };


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
        boxShadow:'5px 5px 6px 1px rgba(0, 0, 0, 0.028)'}}>
      <Toolbar sx={{p:1, position:'relative'}}>
        <IconButton size='large' color='inherit' sx={{display:{xs:'block', sm:'none'}}} onClick={handleNavMenu}>
          <Menu/>
        </IconButton>
        <Grid container sx={{position:{xs:'absolute', sm:'static'}, width:{xs:'200px', sm:'100%'}, top:'90%', left:0, backgroundColor:{xs:'primary.main', sm:'inherit'},
          p:{xs:3, sm:0}, borderRadius:{xs:3, sm:0}, boxShadow:{xs:3, sm:0}, display:{xs: isOpen ? 'flex' : 'none', sm:'flex'},}}>
          <Grid item xs={12} sm={8}>
            <Grid container justifyContent='left' alignItems='center'>
              <Typography sx={{textAlign:'center', fontWeight:'bold', textTransform:'uppercase', fontSize:{xs:'1rem', sm:'1.2rem'} }}>
                Just Task It
              </Typography>
              <IconButton disabled>
                <img style={{marginLeft:'6px', width:'20px', marginBottom:'3px'}} src={logo} alt="" />
              </IconButton>

            </Grid>
          </Grid>
          
          <Grid item xs={12} sm={4} sx={{display:'flex', justifyContent:'flex-end'}}>
            <Grid container sx={{mt:{xs:2,sm:0}}}>
              <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent:{xs:'left', sm:'flex-end'}}}>
                <DarkModeButton/>
              </Grid>

              <Grid item xs={12} sm={6} sx={{mt:{xs:22, sm:0}}}>
              <Grid container  alignItems='center' sx={{justifyContent:{xs:'left', sm:'flex-end'}}}>
                <Typography sx={{mr:1, fontWeight:'bold', fontSize:'1.1rem'}}>
                    {name}
                  </Typography>
                <IconButton onClick={onLogout}>
                  <Logout fontSize='small'/>
                </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}
