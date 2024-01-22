'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { SessionProvider } from "next-auth/react"

export default function NextSession({ children }) {
    return <Provider store={store}>
        <SessionProvider >
            {children}
        </SessionProvider>
    </Provider>

}
