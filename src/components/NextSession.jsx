'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import { SessionProvider } from "next-auth/react"
import { PersistGate } from 'redux-persist/integration/react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function NextSession({ children }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000', // Replace with your desired primary color
            },
        },
        background: {
            default: '#000', // Replace with your desired background color
        },
    });

    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            <SessionProvider >
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </SessionProvider>
        </PersistGate>
    </Provider>

}
