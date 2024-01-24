'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import { SessionProvider } from "next-auth/react"
import { PersistGate } from 'redux-persist/integration/react'


export default function NextSession({ children }) {
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            <SessionProvider >
                {children}
            </SessionProvider>
        </PersistGate>
    </Provider>

}
