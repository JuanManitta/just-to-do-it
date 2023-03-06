
export const getDesignTokens = (mode: any) => ({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary:{
                main: '#202124'
            },
            secondary:{
                main: '#202124'
            },
            background:{
                default: '#202124'
            },
            info:{
                main: '#F7EFE5',
                light: '#E7CFB1',
                dark: '#D3A770'
            },
            text:{
                primary: '#f6f6f7',
                default: '#000'
            },
            
          }
        : {
            primary:{
                main: '#F7EFE5'
            },
            secondary:{
                main: '#f0f5fa'
            },
            background:{
                default: '#F7EFE5'
            },
            info:{
                main: '#F7EFE5',
                light: '#E7CFB1',
                dark: '#D3A770'
            },
          }),
    },
    
    typography: {
        fontFamily:"'Space Grotesk', sans-serif",
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'none',
                        },
                        '&:hover fieldset': {
                            borderColor: mode === 'dark' ? '#F7EFE5' : '#F7EFE5',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: mode === 'dark' ? '#F7EFE5' : 'none',
                        },
                        
                    },
                },
            },
        },
        
        
    },
  });