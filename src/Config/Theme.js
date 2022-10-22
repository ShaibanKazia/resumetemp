import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';


export const Theme = (({ children }) => {
    let theme = createTheme({
    
        typography: {
            fontFamily: 'Jost, sans-serif',
            fontWeightLight: 200,
            fontWeightRegular: 300,
            fontWeightMedium: 400,
            fontWeightBold: 600  
        }
    });

    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
});