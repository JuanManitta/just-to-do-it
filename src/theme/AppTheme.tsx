import { ThemeProvider } from "@emotion/react"
import { ReactNode } from "react";
import { mainTheme, darkTheme } from './mainTheme';
import { CssBaseline, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { colorMode } from '../features/dark-mode/colorModeSlice';
import { getDesignTokens } from "./getDesignThemeTokens";





export const AppTheme = ({ children }: {children: ReactNode}) => {

  const colorMode = useSelector((state: any) => state.colorMode);
  const theme = createTheme(getDesignTokens(colorMode));
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
