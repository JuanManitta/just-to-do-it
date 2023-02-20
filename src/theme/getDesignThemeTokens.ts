
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
                main: '#EFDFCB',
                light: '#E7CFB1',
                dark: '#DBB78A'
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
                main: '#EFDFCB',
                light: '#E7CFB1',
                dark: '#DBB78A'
            },
          }),
    },
    typography: {
        fontFamily:"'Space Grotesk', sans-serif",
    },
  });