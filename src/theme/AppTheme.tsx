import { ThemeProvider } from "@emotion/react"
import { ReactNode } from "react";
import { mainTheme } from "./mainTheme"
import { CssBaseline } from "@mui/material"





export const AppTheme = ({ children }: {children: ReactNode}) => {
  return (
    <ThemeProvider theme={ mainTheme}>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
