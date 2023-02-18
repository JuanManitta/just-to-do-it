import { Grid, Popover, Typography } from '@mui/material';
import React from 'react';

export interface Props {
    children: React.ReactNode;
    content: string;
};


export const MyPopover = ({children, content}: Props) => {

    //STATES
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);


    //HANDLERS
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };

      const handlePopoverClose = () => {
        setAnchorEl(null);
      };
      
    const open = Boolean(anchorEl);
    
      
    
  return (
    <Grid 
      aria-owns={open ? 'mouse-over-popover': undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}>

        {children}

        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          PaperProps={{
            sx: {
              boxShadow: 3,
            }
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          >
          <Typography padding={1}>{content}</Typography>
        </Popover> 
    </Grid> 
  );
};
